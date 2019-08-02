require('module-alias/register');
require(`@pivotal_utils/JsContext.js`);
const {Given, When, Then} = require('cucumber');
const assert = require('assert');
const {ReadJsonFromFile, DataTableToJson, DataTableToJsonList, JsonContains, JsonSchemaValidator} =
    require(`@core_utils/Common.js`);
const {FormatString} = require(`@pivotal_utils/PivotalUtils.js`);
const PivotalTrackerApi = require(`@pivotal_api/PivotalTrackerApi.js`);
const PivotalSchemasDir = require(`@pivotal_schemas/PivotalSchemasDir.js`);

Given('I start a connection with the Pivotal Tracker API', () => {
    JsContext.api = new PivotalTrackerApi();
    JsContext.headers = {};
    JsContext.last_data = {};
    JsContext.already_existing = 0;
    JsContext.context_ids = [''];
    assert.strictEqual(true, true);
});

Given('I log in as {word}', (user_id) => {
    JsContext.headers = JsContext.api.config["headers"];
    JsContext.headers["X-TrackerToken"] = JsContext.api.config["user"][user_id]["token"];
    assert.strictEqual(true, true)
});

Given('I save the id after sending a {word} request to {word} with data:',
    async (http_type, endpoint, table) => {
        JsContext.last_data = FormatString(JSON.stringify(DataTableToJson(table)));
        await JsContext.api.build_end_point(endpoint, JsContext.context_ids);
        await JsContext.api.do_request(http_type, JsContext.last_data, JsContext.headers, {});
        if (http_type === 'POST'){
            JsContext.context_ids.splice(JsContext.context_ids.length-1, 0,
                JSON.parse(JsContext.api.full_response)["id"].toString());
        }
        await assert.strictEqual(true, true);
});

When('I send a {word} request to {word} with data:', async (http_type, endpoint, table) => {
    JsContext.last_data = FormatString(JSON.stringify(DataTableToJson(table)));
    await JsContext.api.build_end_point(endpoint, JsContext.context_ids);
    await JsContext.api.do_request(http_type, JsContext.last_data, JsContext.headers, {});
    if (http_type === 'GET'){
        JsContext.context_ids[JsContext.context_ids.length-1] = JSON.parse(JsContext.api.full_response)["id"].toString()
    }
    await assert.strictEqual(true, true);
});

When('I send several {word} requests to {word} with data:', async(http_type, endpoint, table) => {
    let data_list = await DataTableToJsonList(table);
    await JsContext.api.build_end_point(endpoint, JsContext.context_ids);
    for (let row = 0; row < data_list.length; row++){
        JsContext.last_data = FormatString(JSON.stringify(data_list[row]));
        await JsContext.api.do_request(http_type, JsContext.last_data, JsContext.headers, {});
    }
    await assert.strictEqual(true, true);
});

When('I send a {word} request to {word}', async (http_type, endpoint) => {
    await JsContext.api.build_end_point(endpoint, JsContext.context_ids);
    await JsContext.api.do_request(http_type, null, JsContext.headers, {});
    await assert.strictEqual(true, true);
});

When('I count the already existing {word}', async (endpoint) => {
    await JsContext.api.build_end_point(endpoint, JsContext.context_ids);
    await JsContext.api.do_request('GET', null, JsContext.headers, {});
    JsContext.already_existing = JSON.parse(JsContext.api.full_response).length;
    await assert.strictEqual(true, true);
});

Then('I expect the status code is {int}', (status_code) => {
    assert.strictEqual(JsContext.api.status_code, status_code);
});

Then('I expect the single response contains last data sent', () => {
    assert.strictEqual(JsonContains(JsContext.api.full_response, JsContext.last_data), true);
});

Then('I expect the response is a list that contains {int} new {word}', async (obj_number, endpoint) => {
    await JsContext.api.build_end_point(endpoint, JsContext.context_ids);
    await JsContext.api.do_request('GET', null, JsContext.headers, {});
    await assert.strictEqual(JSON.parse(
        JsContext.api.full_response).length - JsContext.already_existing, obj_number);
});

Then('I expect the schema is valid with {word}', (schema_name) => {
    assert.strictEqual(JsonSchemaValidator(
        ReadJsonFromFile(require('path').join(PivotalSchemasDir, schema_name+'.json')),
        JSON.parse(JsContext.api.full_response)
    ), true);
});
