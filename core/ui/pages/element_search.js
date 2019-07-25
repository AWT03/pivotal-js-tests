require('module-alias/register');
const Element = require('@core_ui/pages/element.js');

class ElementSearch extends Element{

    constructor(){
        super();
        this.search_elements = {};
    }
    update_search_fields(fields){
        for(let tag in fields)
            this.search_elements[tag] = fields[tag]
    }

    is_displayed_as(key,value){
        return this.search_elements[key][value]
    }
}
module.exports = ElementSearch