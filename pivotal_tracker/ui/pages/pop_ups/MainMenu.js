require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let ref_create_project = 'a[data-aid="CreateProject"]';
let ref_all_workspaces = 'a[href*="/projects"][class="tc_projects_menu_show_all"]'
let ref_dashboard = 'span[class="tc_projects_menu_dashboard"]'


class MainMenu extends ActionPage{

    constructor(){
        super();
        this.actions = {
            "Create Project":  () => {
                browser.click(ref_create_project);
                return "ProjectCreation";
            },
            "Show All Projects":  () => {
                browser.click(ref_all_workspaces);
                return "AllProjects";
            },
            "Dashboard":  () => {
                browser.click(ref_dashboard);
                return "DashboardOnly";
            }
        }
    }
}

module.exports = MainMenu;