require('module-alias/register');
const TabPage = require('@core_ui/pages/TabPage.js');
const DashboardProjects = require('@pivotal_ui/pages/dashboard/DashboardProjects.js');
const DashboardWorkspaces = require('@pivotal_ui/pages/dashboard/DashboardWorkspaces.js');

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
        this.tab = new DashboardProjects();
    }


    getProjectsTab(){
        this.tab = new DashboardProjects();
    }

    getWorkspacesTab(){
        this.tab = DashboardWorkspaces;
    }

}

module.exports = DashboardPage;