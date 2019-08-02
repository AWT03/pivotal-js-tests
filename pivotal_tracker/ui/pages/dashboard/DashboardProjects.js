require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let create_project_button = 'button[id="create-project-button"]';

class DashboardProjects extends ActionPage{

    constructor(){
        super();
        this.actions = {
            "Create Project": () => {
                browser.click(create_project_button);
                return "ProjectCreation"
            }
        };
    }
}

module.exports = DashboardProjects;