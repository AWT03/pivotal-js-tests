require('module-alias/register');
const Many = require('extends-classes');
const TabPage = require(`@core_ui/pages/TabPage.js`);
const ElementSearch = require(`@core_ui/pages/ElementSearch.js`);
const DashboardPage = require(`@pivotal_ui/pages/dashboard/DashboardPage.js`);

let go_dashboard_button = '.headerLogo__image';
let header_name = '//span[text()="$(expected_name)"]';
let header_privacy = '//span[text()="($(privacy))"]';

class UserPage extends Many(TabPage, ElementSearch){

    constructor(){
        super();
        this.search_elements = {
            "header_name": (name) => {
                UserPage.validateHeaderName(name)
            },
            "header_privacy": (privacy) => {
                UserPage.validateHeaderPrivacy(privacy)

            }
        };
        this.tabs = {
            "Dashboard": () => {
                this.getDashboardTab();
            }
        };
        this.tab = new DashboardPage();

    }

    getDashboardTab(){
        browser.click(go_dashboard_button);
        this.tab = new DashboardPage();
    }

    static validateHeaderPrivacy(privacy){
        return browser.isExisting(header_privacy.replace('$(privacy)', privacy))
    }
    static validateHeaderName(name){
        return browser.isExisting(header_name.replace('$(privacy)', name))
    }
}

module.exports = UserPage;
