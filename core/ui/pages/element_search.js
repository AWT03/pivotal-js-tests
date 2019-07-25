require('module-alias/register');
const Element = require('@core_ui/pages/element.js');

class ElementSearch extends Element{

    constructor(){
        super();
        this.search_elements = {};
    }
    updateSearchFields(fields){
        for(let tag in fields)
            this.search_elements[tag] = fields[tag]
    }

    isDisplayedAs(key,value){
        return this.search_elements[key][value]
    }
}
module.exports = ElementSearch;