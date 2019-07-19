require('module-alias/register');
const {ReadJsonFromFile} = require(`@core_utils/Common.js`);
const PivotalTrackerDir = require(`@pivotal/PivotalTrackerDir.js`);
const PivotalTrackerApi = require(`@pivotal_api/PivotalTrackerApi.js`);
const Promise = require('bluebird');


/**
 * @return {string}
 */
function FormatString(string_to_format){
    let prefix = ReadJsonFromFile(require('path').join(PivotalTrackerDir, 'config.json'))["prefix"];
    let current_datetime = new Date().toJSON();
    string_to_format = string_to_format.replace("(prefix)", prefix);
    string_to_format = string_to_format.replace("(current_datetime)", current_datetime);
    return string_to_format
}

async function DeleteObjects(username, tag) {
    let api = new PivotalTrackerApi();
    let headers = api.config['headers'];
    headers['X-TrackerToken'] = api.config['user'][username]['token'];
    await api.build_end_point(tag+'s', []);
    await api.do_request('GET', "", headers);
    let current_projects = JSON.parse(api.full_response);
    return Promise.map(current_projects, async value => {
        if (value["name"].includes(api.config["prefix"])) {
            api.build_end_point(tag, [value["id"]]);
            await api.do_request('DELETE', "", headers)
        }
    });
}

module.exports = {
    FormatString,
    DeleteObjects
};
