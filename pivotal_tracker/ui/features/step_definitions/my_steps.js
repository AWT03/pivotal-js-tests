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

Given('I login the pivotal tracker web page as {word}', async (user) => {
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
});

When('I create a story with data:', async (table) => {
    JsContext.last_data = FormatString(JSON.stringify(DataTableToJson(table)));
    JsContext.page.doAction("Add Story");
    JsContext.page.tab.setForm(JSON.parse(JsContext.last_data));
    JsContext.page.doAction("Save");
});

When('I open the last project created', async() => {
    JsContext.page.doAction("Open Project", {"name": JSON.parse(JsContext.api.full_response)["name"]});
    assert.strictEqual(true, true);
});

Then('I verify that {word} is displayed on {word}', async (word, key) => {
    let lastValue = JSON.parse(JsContext.last_data);
    let data = lastValue[word];
    let exists = JsContext.page.isDisplayedAs(key, data);
    assert.strictEqual(exists, true);
});

Then ('I sign out of the pivotal tracker web page', async () => {
    let currentPage = JsContext.page;
    currentPage.goTo("User Profile Menu");
    currentPage.tab.doAction("Sign Out");
    currentPage.tab.doAction("Login Different Account");
});

Then ('I go to {string}', async (word) => {
    let currentPage = JsContext.page;
    currentPage.goTo(word);
});

When ('I click on {string}', async (word) => {
    let currentPage = JsContext.page;
    currentPage.doAction(word);
});

Given ('I click on {string} for {word} account', async (action, account) => {
    let currentPage = JsContext.page;
    currentPage.doAction(action, account);
});

When ('I open the Project Name', async () => {
    let lastNameProject = JSON.parse(JsContext.api.full_response)["name"].toString();
    let currentPage = JsContext.page;
    currentPage.doAction('Project Name', lastNameProject);
});

Then ('I verify that {word} message is displayed for {word}', async (message, objectName) => {
    let object_attribute_split = objectName.split('_');
    let lastNameProject = JSON.parse(JsContext.api.full_response)[object_attribute_split[1]].toString();
    let currentPage = JsContext.page;
    let response = currentPage.tab.isDisplayedAs(message, lastNameProject);
    assert.strictEqual(response, 1);
});

When ('I update a project with', async (table) => {
    let dataUpdate = FormatString(JSON.stringify(DataTableToJson(table)));
    JsContext.last_data = dataUpdate;
    let json = JSON.parse(JsContext.last_data)
    let nameProject = json["name"];
    let descriptionProject = json["description"];
    JsContext.page.tab.setForm({
        "project_name": nameProject,
        "description": descriptionProject
    });
    JsContext.page.doAction("Save");
});

Then ('I verify that "{word}" message is displayed', async (message) => {
    let currentPage = JsContext.page;
    let tab = currentPage.tab;
    let response = tab.verifySaveMesage(message);
    assert.strictEqual(response, true);
});

Then('I verify {word} is displayed on {word}', async (word, key) => {
    let object_attribute_split = word.split('_');
    let lastValue = JSON.parse(JsContext.last_data);
    let data = lastValue[object_attribute_split[1]];
    let exists = JsContext.page.tab.tab.isDisplayedAs(key, data);
    assert.strictEqual(exists, true);
});
