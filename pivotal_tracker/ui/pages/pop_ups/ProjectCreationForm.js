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
        this.formFields = {
            "project_name":  (value) => {
                browser.setValue(project_name_field, value);
            },
            "account": (value) => {
                browser.click(account_selector_field);
                browser.click(account_selected.replace('$(name)', value));
            },
            "privacy": (value) => {
                if (value === "private"){
                    if (! browser.isSelected(select_private_check)){
                        browser.click(select_private_check);
                    }
                }else if (value === "public") {
                    if (! (browser.isSelected(select_public_check))){
                        browser.click(select_public_check);
                    }
                }
            }
        };
        this.actions = {
            "Create":  () => {
                browser.click(create_button);
                browser.waitUntil(() => $(background_div).isVisible() === false);
                return "ProjectMain";
            }
        }
    }
}

module.exports = ProjectCreationForm;