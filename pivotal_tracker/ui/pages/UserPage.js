require('module-alias/register');
const Many = require('extends-classes');
const TabPage = require(`@core_ui/pages/TabPage.js`);
const ElementSearch = require(`@core_ui/pages/ElementSearch.js`);
const DashboardPage = require(`@pivotal_ui/pages/dashboard/DashboardPage.js`);
const ProjectCreationForm = require(`@pivotal_ui/pages/pop_ups/ProjectCreationForm.js`);
const ProjectMain = require(`@pivotal_ui/pages/project/ProjectMain.js`);
const UserProfilePopUp = require(`@pivotal_ui/pages/pop_ups/UserProfilePopUp.js`);
const MainMenu = require(`@pivotal_ui/pages/pop_ups/MainMenu.js`);
const ProjectShowAll = require(`@pivotal_ui/pages/project/ProjectShowAll.js`);
const Profile = require(`@pivotal_ui/pages/account/Profile.js`);
const Account = require(`@pivotal_ui/pages/account/Account.js`);
const ProjectStories = require(`@pivotal_ui/pages/project/ProjectStories.js`);
const ProjectMore = require(`@pivotal_ui/pages/project/ProjectMore.js`);
const StoryBacklog = require(`@pivotal_ui/pages/story/StoryBacklog.js`);

let go_dashboard_button = '.headerLogo__image';
let header_name = '//span[text()="$(expected_name)"]';
let header_privacy = '//span[text()="($(privacy))"]';
let header_profile_dropdown = 'button[aria-label="Profile Dropdown"]';
let header_main_menu = '.tc_projects_dropdown_link.tc_context_name';


class UserPage extends Many(TabPage, ElementSearch){

    constructor(){
        super();
        this.tab = new DashboardPage();
        this.search_elements = {
            "header_name": (name) => {
                browser.pause(15000);
                return browser.isExisting(header_name.replace('$(expected_name)', name))
            },
            "header_privacy": (privacy) => {
                let replace = header_privacy.replace('$(privacy)', privacy);
                return browser.isExisting(header_privacy.replace('$(privacy)', privacy))

            }
        };
        this.tabs = {
            "Dashboard": () => {
                browser.click(go_dashboard_button);
                this.tab = new DashboardPage();
            },
            "ProjectCreation": () => {
                this.tab = new ProjectCreationForm();
            },
            "ProjectMain": () => {
                this.tab = new ProjectMain();
            },
            "User Profile Menu":  () => {
                browser.click(header_profile_dropdown);
                this.tab = new UserProfilePopUp();
            },
            "Main Menu":  () => {
                browser.click(header_main_menu);
                this.tab = new MainMenu();
            },
            "AllProjects": () => {
                this.tab = new ProjectShowAll();
            },
            "Profile": () => {
                this.tab = new Profile();
            },
            "Accounts": () => {
                this.tab = new Account();
            },
            "ProjectStoriesPage": () => {
                this.tab = new ProjectStories();
            },
            "ProjectMorePage": () => {
                this.tab = new ProjectMore();
            },
            "DashboardOnly": () => {
                this.tab = new DashboardPage();
            },
            "StoryBacklogForm": () => {
                this.tab = new StoryBacklog();
            }
        }
    }
}

module.exports = UserPage;
