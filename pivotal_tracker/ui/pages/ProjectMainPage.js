require('module-alias/register');
const ActionPage = require('@core_ui/pages/ActionPage.js');
const ProjectMorePage = require('@pivotal_ui/pages/ProjectMorePage.js');

class ProjectMainPage extends ActionPage {

    constructor() {
        super();
        this.actions = {
            "More": () => {
                return this.clickMoreButton();
            }
        }
        this.updateActions(this.actions);
    }

    get scrimWaitElement() {
        return browser.element('.scrim');
    }

    get moreElement() {
        return browser.element('a[href*="/settings"]');
    }

    clickMoreButton() {
        browser.pause(15000);
        this.moreElement.click();
        return new ProjectMorePage();
    }
}

module.exports = ProjectMainPage;