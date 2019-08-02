require('module-alias/register');

class ElementSearch{

    constructor(){
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