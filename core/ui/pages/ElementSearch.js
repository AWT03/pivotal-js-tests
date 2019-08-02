require('module-alias/register');
const Element = require(`@core_ui/pages/Element.js`);

class ElementSearch extends Element{

    constructor(){
        super();
        this.search_elements = {};
    }
    updateSearchFields(fields){
        this.search_elements = Object.assign(this.search_elements, fields)
    }

    isDisplayedAs(key,value){
        return this.search_elements[key][value]
    }
}
module.exports = ElementSearch;