require('module-alias/register');
const {Given, When, Then} = require('cucumber');
const LoginPage = require('@pivotal_ui/pages/LoginPage.js');
const assert = require('assert');
const {ReadFileConfigPivotal} = require(`@pivotal_utils/PivotalUtils.js`);
const {FormatString} = require(`@pivotal_utils/PivotalUtils.js`);
const {SetupMainUrl} = require(`@core_utils/SetupBrowser.js`);
const EndpointSaved = require('@core_ui/EndpointSaved.js');

Given('I login the app as "{word}"', async (user) => {
    let config = ReadFileConfigPivotal();
    let path = config["main_url"];
    SetupMainUrl(path);
    let login_page = new LoginPage;
    this.page = login_page;
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


When('I fill the form with data', async (table) => {
    this.setValues = {}
    let tableKeyValuesData = table.rowsHash();
    for(let key in tableKeyValuesData){
        let value = tableKeyValuesData[key];
        value = FormatString(value);
        this.setValues[key] = value;
    }
    this.page.doAction("Create Project");
    this.page.goTo("ProjectCreation");
    this.page.getTab().setForm(this.setValues);
    this.page.doAction("Create");
});


When('I create a story with', async (table) => {
    this.page.goTo("ProjectMain");
    this.page.getTab().goTo("Stories");
    // this.setValues = {}
    // let tableKeyValuesData = table.rowsHash();
    // for(let key in tableKeyValuesData){
    //     let value = tableKeyValuesData[key];
    //     value = FormatString(value);
    //     this.setValues[key] = value;
    // }
    this.setValues = {
        "story_title": "AWT03_story",
    };
    this.page.doAction("Add Story");
    browser.pause(1000);
    this.page.doAction(this.setValue);
    this.page.setForm(this.setValues)
    browser.pause(3000);
});


Given('I go to "{word}"', async (navigation) => {
    //this.tab_level = (navigation.split("-")).length;
    // for (let [index, tab] of (navigation.split("-")).entries()){
    //     eval("this.page"+ (index['.get_tab()']).join("")+ '.go_to(tab)');
    // }
    eval("this.page"+ '.goTo("ProjectMain")');
    eval("this.page"+ ".getTab()"+ '.goTo("Stories")');
});
