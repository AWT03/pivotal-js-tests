require('module-alias/register');
let path = require('path');
const GenericApi = require(`@core_api/GenericApi.js`);
const {ReadJsonFromFile} = require(`@core_utils/Common.js`);
const PivotalTrackerDir = require(`@pivotal/PivotalTrackerDir.js`);

class PivotalTrackerApi extends GenericApi{
    constructor() {
        super();
        this.config = ReadJsonFromFile(path.join(PivotalTrackerDir, 'config.json'))
    }

    build_end_point(tag, ids) {
        super.build_end_point(tag);
        let base = this.config["base"];
        let specific = ReadJsonFromFile(path.join(PivotalTrackerDir, 'api','endpoint.json'))[tag];
        for (let i = 0; i < ids.length; i++){
            specific = specific.replace("$ID("+i+")", ids[i]);
        }
        this.url = base + specific;
    }
}

module.exports = PivotalTrackerApi;
