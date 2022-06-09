const database = require('../models')

class Services {
    constructor(modelName) {
        this.modelName= modelName
    }

    async catchAllRegistrations() {
        return database[this.modelName].findAll()

    }

    async catchOneRegistration(id) {

    }

    async createRegistration(data) {

    }

    async updateRegistration(updatedData, id) {

    }

    async deleteRegistration(id) {
        
    }

}

module.exports = Services