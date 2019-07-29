require('module-alias/register');
const Many = require('extends-classes');
const FormPage = require('@core_ui/pages/FormPage.js');
const ActionPage = require('@core_ui/pages/ActionPage.js');
const UserPage = require('@pivotal_ui/pages/UserPage.js');

let username_field = '#credentials_username';
let password_field = '#credentials_password';
let signin_button = '.app_signin_action_button';

class LoginPage extends Many(FormPage, ActionPage) {

    constructor() {
        super();
        this.fields = {
            "sign_in_as": (username) => {
                this.setUsername(username)
            },
            "password": (password) => {
                browser.setValue(password_field, password)
            }
        }
        this.actions = {
            "Sign In": () => {
                return this.signIn();
            }
        }
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    setUsername( username){
        browser.setValue(username_field, username);
        browser.click(signin_button)
    }

    signIn(){
        browser.click(signin_button);
        return new UserPage();
    }
}

module.exports = LoginPage;