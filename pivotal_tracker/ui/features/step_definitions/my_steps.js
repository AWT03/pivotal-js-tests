require('module-alias/register');
const {Given, When, Then} = require('cucumber');
const LoginPage = require('@pivotal_ui/pages/login_page.js');
const assert = require('assert');
const {ReadFileConfigPivotal} = require(`@pivotal_utils/PivotalUtils.js`);
const {FormatString} = require(`@pivotal_utils/PivotalUtils.js`);
const {SetupMainUrl} = require(`@core_utils/SetupBrowser.js`);

Given('I login the app as "{word}"', async (user) => {
    let config = ReadFileConfigPivotal();
    let path = config["main_url"];
    SetupMainUrl(path);
    let login_page = new LoginPage;
    this.page = login_page;
    //this.page.doAction('Log In');
    //this.page = loginPage;
    let config_user = config["user"];
    let config_type_user = config_user[user];
    let config_user_username = config_type_user["username"];
    let config_user_password = config_type_user["password"];
    let values_form = {
        "sign_in_as":config_user_username,
        "password":config_user_password
    };
    this.page.setForm(values_form);
    this.page = this.page.doAction("Sign In");
});

// When('I click on {string} button', async (action) => {
//     this.page = this.page.doAction(action);
// });

When('I fill the form with data', async (table) => {
    this.setValues = {};
    let tableKeyValuesData = table.rowsHash();
    for(let key in tableKeyValuesData){
        let value = tableKeyValuesData[key];
        value = FormatString(value);
        this.setValues[key] = value;
    }
    this.page.doAction("Create Project");
    //this.page.goTo("ProjectCreation");
    this.page.getTab().setForm(this.setValues);
    this.page.doAction("Create");
});


When('I create a story with', async (table) => {
    this.setValues = {};
    let tableKeyValuesData = table.rowsHash();
    for(let key in tableKeyValuesData){
        let value = tableKeyValuesData[key];
        value = FormatString(value);
        this.setValues[key] = value;
    }
    this.page.doAction("Add Story");
    //this.page.goTo("ProjectCreation");
    this.page.getTab().setForm(this.setValues);
    this.page.doAction("Save");
});




