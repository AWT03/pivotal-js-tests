class ElementSearch{
    constructor(){
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