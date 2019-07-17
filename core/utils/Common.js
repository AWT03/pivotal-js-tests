/**
 * @param path_to_file {string} a valid path to a json (mime-type) file
 * @returns {object} the contents of the file as object
 * @constructor
 */
function ReadJsonFromFile(path_to_file){
    return JSON.parse(require('fs').readFileSync(path_to_file))
}


/**
 * Takes a two dimensional datatable as argument and generates an object from it
 * @param table {table}
 * @returns {object}
 * @constructor
 */
function DataTableToJson(table){
    let dict = {};
    for (let row = 0; row < table.raw().length; row++){
        try {
            dict[table.raw()[row][0]] = JSON.parse(table.raw()[row][1]);
        }
        catch (SyntaxError) {
            dict[table.raw()[row][0]] = table.raw()[row][1];
        }
    }
    return dict
}


/**
 * Takes a datatable, first row is considered to contain headers
 * Next rows are used to create objects
 * @param table {table}
 * @returns {Array} list of objects based on rows and headers
 * @constructor
 */
function DataTableToJsonList(table){
    let list = [];
    let dict = [];
    let cols = [];
    for (let head =0; head < table.raw()[0].length; head++){
        cols.push(table.raw()[0][head])
    }
    for (let row = 1; row < table.raw().length; row++){
        dict = {};
        for (let col = 0; col<table.raw()[row].length; col++){
            dict[cols[col]] = table.raw()[row][col];
        }
        list.push(dict);
    }
    return list
}


/**
 * Checks if the object contained on val1 is contained on val2
 * If strict is not enabled, only keys are validated
 * @param val1 {string} contains an object
 * @param val2 {string} contains an object
 * @param strict {boolean}
 * @returns {boolean} true if val1 is contained on val2, else false
 * @constructor
 */
function JsonContains(val1, val2, strict=true){
    let container = JSON.parse(val1);
    let data = JSON.parse(val2);
    for (let i in data){
        if (data.hasOwnProperty(i)){
            if (!container.hasOwnProperty(i)){
                return false
            }
            if (container.hasOwnProperty(i)){
                if (container[i] !== data[i] && strict){
                    return false
                }
            }
        }
    }
    return true
}


/**
 * Json schema validator, first argument is the schema
 * Data is the actual object we want to validate
 * @param schema {object}
 * @param data {object}
 * @returns {boolean | PromiseLike<boolean>}
 * @constructor
 */
function JsonSchemaValidator(schema, data){
    const Ajv = require('ajv');
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return validate(data);
}

module.exports = {
    ReadJsonFromFile,
    DataTableToJson,
    DataTableToJsonList,
    JsonContains,
    JsonSchemaValidator
};
