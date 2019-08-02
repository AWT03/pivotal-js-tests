require('module-alias/register');
const Many = require('extends-classes');
const FormPage = require(`@core_ui/pages/FormPage.js`);
const ActionPage = require(`@core_ui/pages/ActionPage.js`);
const Element = require(`@core_ui/pages/Element.js`);
const UserPage = require(`@pivotal_ui/pages/UserPage.js`);

let username_field = '#credentials_username';
let password_field = '#credentials_password';
let signin_button = '.app_signin_action_button';

class LoginPage extends Many(FormPage, ActionPage, Element) {

    constructor() {
        super();
        this.fields = {
            "sign_in_as": (username) => {
                this.setUsername(username)
            },
            "password": (password) => {
                this.set_value(password_field, password)
            }
        };
        this.actions = {
            "Sign In": () => {
                return this.signIn();
            }
        };
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    setUsername(username){
        this.set_value(username_field, username);
        this.do_click(signin_button)
    }

    signIn(){
        this.do_click(signin_button);
        return new UserPage();
    }
}

module.exports = LoginPage;