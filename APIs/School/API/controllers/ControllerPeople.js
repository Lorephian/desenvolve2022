const database = require('../models')

class ControllerPeople {
    static async catchAllPeople(req, res){
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async catchOnePerson(req, res) {
        const {id} = req.params
        try{
            const onePerson = await database.People.findOne( {where: { id: Number(id)}})
            return res.status(200).json(onePerson)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body
        try{
            const newCreatedPerson = await database.People.create(newPerson)
            return res.status(200).json(newCreatedPerson)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updatePerson(req, res) {
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.People.update(newInfos, {where: {id:Number(id)}})
            const updatedPerson = await database.People.findOne({where: {id: Number(id)}})
            return res.status(200).json(updatedPerson)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deletePerson(req, res) {
        const {id} = req.params
        try {
            await database.People.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `id ${id} deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}



module.exports = ControllerPeople