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

    async updateRegistration(updatedData, id, transaction = {}) {
        return database[this.modelName].update(updatedData, {where: { id: id } }, transaction )
    }

    async updateRegistrations(updatedData, where, transaction = {}) {
        return database[this.modelName].update(updatedData, {where: { ...where } }, transaction )
    }

    async deleteRegistration(id) {

    }

}

module.exports = Services