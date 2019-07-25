require('module-alias/register');
const ActionPage = require('@core_ui/pages/ActionPage.js');
const TabPage = require('@core_ui/pages/tab_page.js');
const ProjectFormPage = require('@pivotal_ui/pages/ProjectFormPage.js');

class DashboardPage extends TabPage{

    constructor() {
        super();
    }


}

module.exports = DashboardPage;