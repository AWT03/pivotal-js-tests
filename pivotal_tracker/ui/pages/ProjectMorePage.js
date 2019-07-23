require('module-alias/register');
const ActionPage = require('@core_ui/pages/ActionPage.js');

class ProjectMorePage extends ActionPage {

    constructor() {
        super();
        this.actions = {
        }
        this.updateActions(this.actions);
    }
}

module.exports = ProjectMorePage;