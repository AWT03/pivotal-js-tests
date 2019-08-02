require('module-alias/register');
const Element = require(`@core_ui/pages/Element.js`);

class FormPage extends Element{

    constructor() {
        super();
        this.formFields = {};
    }

    updateFormFields(fields){
        this.formFields = Object.assign(this.formFields, fields)
    }

    setForm(fields) {
        for(let tag in fields){
            if (fields.hasOwnProperty(tag))
                this.formFields[tag](fields[tag])
        }
    }
}

module.exports = FormPage;