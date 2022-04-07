const SupplierTable = require('./SupplierTable')
const InvalidField = require('../../errors/InvalidField')
const DataNotProvided = require('../../errors/DataNotProvided')

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
        this.validate()
        const result = await SupplierTable.insert({
            company: this.company,
            email: this.email,
            category: this.category
    
        })

        this.id = result.id
        this.creationDate = result.creationDate
        this.updateDate = result.updateDate
        this.version = result.version
    }

    async load () {
        const found = await SupplierTable.catchById(this.id)
        this.company = found.company
        this.email = found.email
        this.category = found.category
        this.creationDate = found.creationDate
        this.updateDate = found.updateDate
        this.version = found.version
}

    async update () {
        await SupplierTable.catchById(this.id)
        const fields = ["company", "email", "category"]
        const dataToUpdate = {}

        fields.forEach((field) => {
            const value = this[field]

            if (typeof value === "string" && value.length > 0){
                dataToUpdate[field] = value
            }
        })

        if (Object.keys(dataToUpdate).length === 0) { 
            throw new Error('No data to update was provided!')
        }

        await SupplierTable.update(this.id, dataToUpdate)
    }   

    remove() {
        return SupplierTable.remove(this.id)
    }

    validate() {
        const fields = ['company', 'email', 'category']

        fields.forEach(field => {
            const value = this[field]

            if(typeof value !== 'string' || value.length === 0) {
                throw new InvalidField(field)
            }
        })
    }
}

module.exports = Supplier