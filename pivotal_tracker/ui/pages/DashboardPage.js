require('module-alias/register');
const ActionPage = require('@core_ui/pages/ActionPage.js');
const ProjectFormPage = require('@pivotal_ui/pages/ProjectFormPage.js');

class DashboardPage extends ActionPage {

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