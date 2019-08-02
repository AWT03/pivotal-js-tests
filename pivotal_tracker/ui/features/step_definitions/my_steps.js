require('module-alias/register');
const {Given, When, Then} = require('cucumber');
const LoginPage = require(`@pivotal_ui/pages/LoginPage.js`);
const assert = require('assert');
const {ReadFileConfigPivotal} = require(`@pivotal_utils/PivotalUtils.js`);
const {SetupMainUrl} = require(`@core_utils/SetupBrowser.js`);

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


