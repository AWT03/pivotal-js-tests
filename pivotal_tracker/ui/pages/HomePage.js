require('module-alias/register');
const ActionPage = require('@core_ui/pages/ActionPage.js');
const LoginPage = require('@pivotal_ui/pages/LoginPage.js');

class HomePage extends ActionPage {

    constructor() {
        super();
        this.actions = {
            "Log In": () => {
                return this.clickLogInButton();
            }
        }
        this.updateActions(this.actions);
    }

    get logInButton() {
        return browser.element('.header__lg a[class="header__link header__link-signin"]');
    }

    clickLogInButton(){
        this.logInButton.click();
        return new LoginPage();
    }
}

module.exports = HomePage;