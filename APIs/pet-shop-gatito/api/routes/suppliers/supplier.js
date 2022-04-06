const SupplierTable = require('./suppliersTable')

class Supplier{
    constructor({id, company, email, category, creationDate, updateDate, version}) {
        this.id = id
        this.company = company
        this.email = email
        this.category = category
        this.creationDate = creationDate
        this.updateDate = updateDate
        this.version = version
    }

    async create(){
const result = await SupplierTable.inserir({
    company: this.company,
    email: this.email,
    category:  this.category
    
})

this.id = result.id
this.creationDate = result.creationDate
this.updateDate = result.updateDate
this.version = result.version
    }

}

module.exports = Supplier