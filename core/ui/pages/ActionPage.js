class ActionPage{

    constructor() {
        this.actions = {};
    }

    updateActions(actions){
        for(let action in actions)
            this.actions[action] = actions[action];
    }

    doAction(action){
        if(action in this.actions)
            return this.actions[action]();
    }
}

module.exports = ActionPage;