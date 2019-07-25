require('module-alias/register');
const Many = require('extends-classes')
const FormPage = require('@core_ui/pages/form_page.js');
const ActionPage = require('@core_ui/pages/action_page.js');
const UserPage = require('@pivotal_ui/pages/user_page.js');

let username_field = '#credentials_username';
let password_field = '#credentials_password';
let signin_button = '.app_signin_action_button';

class LoginPage extends Many(FormPage, ActionPage) {

    constructor() {
        super();
        this.fields = {
            "sign_in_as": (username) => {
                this.set_username(username)
            },
            "password": (password) => {
                browser.setValue(password_field, password)
            }
        }
        this.actions = {
            "Sign In": () => {
                return this.sign_in();
            }
        }
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    set_username( username){
        browser.setValue(username_field, username);
        browser.click(signin_button)
    }

    sign_in(){
        browser.click(signin_button)
        return new UserPage();
    }
}

module.exports = LoginPage;