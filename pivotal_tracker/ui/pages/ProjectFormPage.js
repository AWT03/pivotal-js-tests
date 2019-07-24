require('module-alias/register');
const Many = require('extends-classes')
const ActionPage = require('@core_ui/pages/ActionPage.js');
const FormPage = require('@core_ui/pages/FormPage.js');
const ProjectMainPage = require('@pivotal_ui/pages/ProjectMainPage.js');

class ProjectFormPage extends Many(FormPage, ActionPage) {

    constructor() {
        super();
        this.fields = {
            "project_name": (projectName) => {
                this.projectNameInput.setValue(projectName);
            },
            "account": (projectAccount) => {
                this.selectProjectAccount(projectAccount);
            },
            "privacy": (projectPrivacy) => {
                this.selectProjectPrivacy(projectPrivacy);
            }
        }

        this.actions = {
            "Create": () => {
                return this.clickCreateButton();
            }
        }
        this.updateFormFields(this.fields);
        this.updateActions(this.actions);
    }

    get projectNameInput() {
        return browser.element('input[name="project_name"]');
    }

    get projectAccountListSelect() {
        return browser.element('div[class="tc-account-selector"]');
    }

    get projectPrivacySelector() {
        return '[value = ($privacy)]';
    }

    get projectAccountNameSelector() {
        return '//div[@class="tc-account-selector__option-account-name" and text()="$(name)"]';
    }

    get createButton() {
        return browser.element('button[data-aid="FormModal__submit"]');
    }

    selectProjectAccount(projectAccount){
        this.projectAccountListSelect.click();
        browser.pause(1000);
        let projectAccountNameInput = this.projectAccountNameSelector.replace('$(name)', projectAccount);
        browser.element(projectAccountNameInput).click();
    }

    selectProjectPrivacy(projectPrivacy){
        let projectPrivacyConvert = (projectPrivacy === 'true')? 'private' :'public';
        let projectPrivacyInput = this.projectPrivacySelector.replace('($privacy)', projectPrivacyConvert)
        browser.element(projectPrivacyInput).click();
    }

    clickCreateButton() {
        this.createButton.click();
        return new ProjectMainPage();
    }
}

module.exports = ProjectFormPage;