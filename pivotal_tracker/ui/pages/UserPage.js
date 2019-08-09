require('module-alias/register');
const Many = require('extends-classes');
const TabPage = require(`@core_ui/pages/TabPage.js`);
const ElementSearch = require(`@core_ui/pages/ElementSearch.js`);
const Element = require(`@core_ui/pages/Element.js`);
const DashboardPage = require(`@pivotal_ui/pages/dashboard/DashboardPage.js`);
const ProjectCreationForm = require(`@pivotal_ui/pages/pop_ups/ProjectCreationForm.js`);

let go_dashboard_button = '.headerLogo__image';
let header_name = '//span[text()="$(expected_name)"]';
let header_privacy = '//span[text()="($(privacy))"]';

class UserPage extends Many(TabPage, ElementSearch){

    constructor(){
        super();
        this.tab = new DashboardPage();
        this.search_elements = {
            "header_name": (name) => {
                return browser.isExisting(header_name.replace('$(privacy)', name))
            },
            "header_privacy": (privacy) => {
                return browser.isExisting(header_privacy.replace('$(privacy)', privacy))

            }
        };
        this.tabs = {
            "Dashboard": () => {
                browser.click(go_dashboard_button);
                this.tab = new DashboardPage();
            },
            "ProjectCreation": () => {
                this.tab = new ProjectCreationForm()
            }
        };

    }
}

module.exports = UserPage;
