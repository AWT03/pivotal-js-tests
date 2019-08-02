require('module-alias/register');
const Element   = require(`@core_ui/pages/Element.js`);

class ActionPage extends Element {
    constructor() {
        super();
        this.actions = {
            };
    }

    updateActions(actions){
        this.actions = Object.assign(this.actions, actions)
    }

    doAction(action){
        if(action in this.actions)
            return this.actions[action]();
    }
}

module.exports = ActionPage;
