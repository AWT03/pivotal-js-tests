require('module-alias/register');
const TabPage = require('@core_ui/pages/tab_page.js');
const DashboardProjects = require('@pivotal_ui/pages/dashboard_pprojects.js');
const DashboardWorksapces = require('@pivotal_ui/pages/dashboard_workspaces.js');

class DashboardPage extends TabPage{
    constructor(){
        super();
        this.tabs = {
            "Projects": () => {
                return this.get_projects_tab();
            },
            "Workspaces": () => {
                return this.get_workspaces_tab();
            }
        }
        this.tab = DashboardProjects;
    }

    get_projects_tab(){
        this.tab = DashboardProjects;
    }
    get_workspaces_tab(){
        this.tab = DashboardWorksapces;
    }
}
exports.module = DashboardPage;