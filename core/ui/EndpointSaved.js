class EndpointSaved {
    constructor(){
        this.project = {};
    }
    getProjectId(){
        return this.project;
    }
    setProjectId(value){
        this.project = value;
    }
}

module.exports = EndpointSaved;