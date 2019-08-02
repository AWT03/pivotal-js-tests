require('module-alias/register');
require(`@pivotal_utils/JsContext.js`);
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
    JsContext.page = new LoginPage();
    JsContext.page.setForm({
        "sign_in_as": config["user"][user]["username"],
        "password": config["user"][user]["password"]
    });
    JsContext.page = JsContext.page.doAction("Sign In");
});


When('I create a project with data:', async (table) => {
    JsContext.last_data = FormatString(JSON.stringify(DataTableToJson(table)));
    JsContext.page.doAction("Create Project");
    JsContext.page.tab.setForm(JSON.parse(JsContext.last_data));
    JsContext.page.doAction("Create");
    assert.strictEqual(true, true);
});
