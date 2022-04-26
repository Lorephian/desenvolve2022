const database = require('../models')

class ControllerPeople {
    static async catchAllPeople(req, res){
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(errors.message)
        }
    }
}

module.exports = ControllerPeople