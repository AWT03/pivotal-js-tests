require('module-alias/register');
const ActionPage = require(`@core_ui/pages/ActionPage.js`);

let ref_create_project = '//a[text()="+ Create Project"]';


class ProjectShowAll extends ActionPage{

    constructor(){
        super();
        this.actions = {
            "Create Project":  () => {
                browser.click(ref_create_project);
                return "ProjectCreation";
            }
        }
    }
}

module.exports = ProjectShowAll;