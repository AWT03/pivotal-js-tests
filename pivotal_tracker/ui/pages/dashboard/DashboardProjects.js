require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);
const Element = require(`@core_ui/pages/Element.js`);
const Many = require('extends-classes');

let create_project_button = 'button[id="create-project-button"]';
let specific_project_name = '//a[text()="$(project_name)"]';
let background_div = '.scrim';

class DashboardProjects extends Many(ActionPage, Element){

    constructor(){
        super();
        this.actions = {
            "Create Project": () => {
                this.click(create_project_button);
                return "ProjectCreation"
            },
            "Open Project": (params) =>{
                this.click(specific_project_name
                    .replace("$(project_name)", params["name"]));
                browser.waitUntil(() => $(background_div).isVisible() === false);
                return "ProjectMainPage"
            }
        };
    }
}

module.exports = DashboardProjects;