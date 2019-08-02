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
                browser.setValue(project_name_field, value);
            },
            "account": (value) => {
                this.setAccount(value);
            },
            "privacy": (value) => {
                this.changePrivacy(value);
            }
        };
        this.actions = {
            "Create": () => {
                this.createProjec();
            }
        };
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    setAccount(value){
        browser.click(account_selector_field);
        browser.click(account_selected.replace('$(name)', value));
    }

    changePrivacy(value){
        if (value === "Public"){
            this.checkPrivate();
        }else if (value === "Private") {
            this.checkPublic();
        }
    }

    checkPrivate(){
        if (! browser.isSelected(select_private_check)){
            browser.click(select_private_check);
        }
    }

    checkPublic(){
        if (! (browser.isSelected(select_public_check))){
            browser.click(select_public_check);
        }
    }

    createProjec(){
        browser.click(create_button);
        return "ProjectMain";
    }
}

module.exports = ProjectCreationForm;