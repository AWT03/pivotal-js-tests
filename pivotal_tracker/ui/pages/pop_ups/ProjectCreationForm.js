require('module-alias/register');
const Many = require('extends-classes');
const FormPage = require(`@core_ui/pages/FormPage.js`);
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let project_name_field = 'input[name="project_name"]';
let account_selector_field = 'div[class="tc-account-selector"]';
let account_selected = '//div[@class="tc-account-selector__option-account-name" and text()="$(name)"]';
let select_private_check = 'input[data-aid="private"]';
let select_public_check = 'input[data-aid="public"]';
let create_button = 'button[data-aid="FormModal__submit"]';
let background_div = '.scrim';

class ProjectCreationForm extends Many(FormPage, ActionPage){

    constructor(){
        super();
        this.fields = {
            "project_name": (value) => {
                this.set_value(project_name_field, value);
            },
            "account": (value) => {
                this.set_account(value);
            },
            "privacy": (value) => {
                this.change_privacy(value);
            }
        };
        this.actions = {
            "Create": () => {
                this.create_project();
            }
        };
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    set_account(value){
        this.do_click(account_selector_field);
        this.do_click(account_selected.replace('$(name)', value));
    }

    change_privacy(value){
        if (value === "Public"){
            this.check_private();
        }else if (value === "Private") {
            this.check_public();
        }
    }

    check_private(){
        if (! browser.isSelected(select_private_check)){
            this.do_click(select_private_check);
        }
    }

    check_public(){
        if (! (browser.isSelected(select_public_check))){
            this.do_click(select_public_check);
        }
    }

    create_project(){
        this.do_click(create_button);
        browser.waitUntil(() => $(background_div).isVisible() === false);
        return "ProjectMain";
    }
}

module.exports = ProjectCreationForm;