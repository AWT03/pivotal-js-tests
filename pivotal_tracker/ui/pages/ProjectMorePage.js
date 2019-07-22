require('module-alias/register');
const Many = require('extends-classes')
const ActionPage = require('@core_ui/pages/ActionPage.js');

class ProjectMorePage extends Many(ActionPage) {

    constructor() {
        super();
        this.actions = {
        }
        this.updateActions(this.actions);
    }
}

module.exports = ProjectMorePage;