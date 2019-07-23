
class FormPage{

    constructor() {
        this.formFields = {}
    }

    updateFormFields(fields){
        for (let field in fields)
            this.formFields[field] = fields[field]
    }

    setForm(fields) {
        for(let tag in fields){
            if(tag in this.formFields)
                this.formFields[tag](fields[tag])
        }
    }
}

module.exports = FormPage;