require('module-alias/register');
const Many = require('extends-classes')
const FormPage = require('@core_ui/pages/form_page.js');
const ActionPage = require('@core_ui/pages/action_page.js');
const DashboardPage = require('@pivotal_ui/pages/user_page.js');

class LoginPage extends Many(FormPage, ActionPage) {

    constructor() {
        super();
        this.fields = {
            "sign_in_as": (username) => {
                this.clickNextButton(username);
            },
            "password": (password) => {
                this.passwordInput.setValue(password);
            }
        }
        this.actions = {
            "Sign In": () => {
                return this.clickSignInButton();
            }
        }
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    get usernameInput() {
        return browser.element('#credentials_username');
    }

    get nextButton() {
        return browser.element('.app_signin_action_button');
    }

    get passwordInput() {
        return browser.element('#credentials_password');
    }

    get loginButton() {
        return browser.element('.app_signin_action_button');
    }

    clickNextButton(username) {
        this.usernameInput.setValue(username);
        this.nextButton.click();
    }

    clickSignInButton() {
        this.loginButton.click();
        return new DashboardPage();
    }
}

module.exports = LoginPage;