require('module-alias/register');
const Many = require('extends-classes')
const ActionPage = require('@core_ui/pages/ActionPage.js');
const ProjectFormPage = require('@pivotal_ui/pages/ProjectFormPage.js');

class DashboardPage extends Many(ActionPage) {

    constructor() {
        super();
        this.actions = {
            "Create Project": () => {
                return this.clickCreateProjectButton();
            }
        };
        this.updateActions(this.actions);
    }

    get createProjectButton() {
        return browser.element('button[id="create-project-button"]');
    }

    clickCreateProjectButton() {
        this.createProjectButton.click();
        return new ProjectFormPage();
    }
}

module.exports = DashboardPage;