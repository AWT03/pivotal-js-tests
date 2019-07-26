require('module-alias/register');
const TabPage = require('@core_ui/pages/tab_page.js');
const DashboardProjects = require('@pivotal_ui/pages/dashboard/dashboard_projects.js');
const DashboardWorkspaces = require('@pivotal_ui/pages/dashboard/dashboard_workspaces.js');

class DashboardPage extends TabPage{

    constructor(){
        super();
        this.tabs = {
            "Projects": () => {
                this.getProjectsTab();
            },
            "Workspaces": () => {
                this.getWorkspacesTab();
            }
        }
        this.tab = DashboardProjects;
    }

    getProjectsTab(){
        this.tab = DashboardProjects;
    }

    getWorkspacesTab(){
        this.tab = DashboardWorkspaces;
    }

}

module.exports = DashboardPage;