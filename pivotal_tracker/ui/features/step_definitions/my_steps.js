require('module-alias/register');
const {Given, When, Then} = require('cucumber');
const LoginPage = require(`@pivotal_ui/pages/LoginPage.js`);
const assert = require('assert');
const {ReadFileConfigPivotal} = require(`@pivotal_utils/PivotalUtils.js`);
const {SetupMainUrl} = require(`@core_utils/SetupBrowser.js`);
const {FormatString} = require(`@pivotal_utils/PivotalUtils.js`);
const {ReadJsonFromFile, DataTableToJson, DataTableToJsonList, JsonContains, JsonSchemaValidator} =
    require(`@core_utils/Common.js`);

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

Given('I login the app as {word}', async (user) => {
    let config = ReadFileConfigPivotal();
    let path = config["main_url"];
    SetupMainUrl(path);
    this.page = new LoginPage();
    this.page.setForm({
        "sign_in_as": config["user"][user]["username"],
        "password": config["user"][user]["password"]
    });
    this.page = this.page.doAction("Sign In");
});


When('I create a project with data:', async (table) => {
    this.last_data = FormatString(JSON.stringify(DataTableToJson(table)));
    this.page.doAction("Create Project");
    this.page.tab.setForm(JSON.parse(this.last_data));
    this.page.doAction("Create");
    assert.strictEqual(true, true);
});
