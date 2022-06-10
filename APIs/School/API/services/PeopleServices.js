const Services = require('../services/Services')
const database = require('../models')

class PeopleServices extends Services {
    constructor(){
        super('People')
        this.registrations = new Services('Registrations')
    }

    async catchActiveRegistrations(where = {}) {
        return database[this.modelName].findAll({ where: { ...where } })
    }

    async catchAllRegistrations(where ={}) {
        return database[this.modelName].scope('all').findAll({ where: { ...where } })
    }

    async cancelPersonAndRegistrations(studentId) {
        return database.sequelize.transaction(async transaction => {
            await super.updateRegistration({ active: false }, studentId, { transaction: transaction })
            await this.registrations.updateRegistrations({ status: 'canceled' }, { student_id: studentId }, { transaction: transaction })
        })
    }

}
    

module.exports = PeopleServices