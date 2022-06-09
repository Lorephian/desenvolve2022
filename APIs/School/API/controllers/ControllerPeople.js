const database = require('../models')
const Sequelize = require('sequelize')
const Services = require('../services/Services')
const peopleServices = new Services('People')

class ControllerPeople {
    static async catchAllPeople(req, res){
        try {
            const allPeople = await database.People.scope('all').findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async catchActivePeople(req, res){
        try {
            const activePeople = await peopleServices.catchAllRegistrations()
            return res.status(200).json(activePeople)
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

    static async restorePerson(req, res) {
        const {id} = req.params
        try {
            await database.People.restore( {where: { id: Number(id) } } )
            return res.status(200).json({ message: `id ${id} was restored`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async catchOneRegistration(req, res) {
        const {studentId, registrationId} = req.params
        try{
            const oneRegistration = await database.Registrations.findOne( {
                where: { 
                    id: Number(registrationId),
                    student_id: Number(studentId)
                }
            })
            return res.status(200).json(oneRegistration)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createRegistration(req, res) {
        const { studentId } = req.params
        const newRegistration = {...req.body, student_id: Number(studentId)}
        try{
            const newCreatedRegistration = await database.Registrations.create(newRegistration)
            return res.status(200).json(newCreatedRegistration)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateRegistration(req, res) {
        const {studentId, registrationId} = req.params
        const newInfos = req.body
        try {
            await database.Registrations.update(newInfos, {where: {
                id:Number(registrationId),
                student_id:Number(studentId)
            }
        })
            const UpdatedRegistration = await database.Registrations.findOne({where: 
                {
                    id: Number(id)
                }})
            return res.status(200).json(updatedRegistration)
          } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async deleteRegistration(req, res) {
        const {id} = req.params
        try {
            await database.Registrations.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `id ${id} deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteOneRegistration(req, res) {
        const {studentId, registrationId} = req.params
        const newInfos = req.body
        try {
            await database.Registrations.destroy({where: {id: Number(registrationId)}})
            return res.status(200).json({message: `id ${registrationId} deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async catchRegistration(req, res) {
        const {studentId} = req.params
        try {
            const person = await database.People.findOne({where: { id: Number(studentId)}})
            const registrations = await person.getRegisteredClasses()
            return res.status(200).json(registrations)


        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async catchRegistrationByClass(req, res) {
        const {classId} = req.params
        try {
           const allRegistrations = await database.Registrations.findAndCountAll(
               { where: {
               class_id: Number(classId),
               status: 'confirmed' 
            },
            limit: 20,
            order: [['student_id', 'ASC']]
        })
        return res.status(200).json(allRegistrations)
        } 

        catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async catchFullClasses(req, res) {
        const {classLimit} = 4
        try {
           const fullClasses = await database.Registrations.findAndCountAll({
               where: {
                   status: 'confirmed'
               },
               attributes: ['class_id'],
               group: ['class_id'],
               having: Sequelize.literal(`count(class_id) >= ${classLimit}`)
           })

        return res.status(200).json(fullClasses.count)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cancelPerson(req, res) {
        const { studentId } = req.params
        try {
            database.sequelize.transaction(async transaction => {

                await database.People.update({ active: false }, { where: {id: Number(studentId)} }, { transaction: transaction })
               
                await database.Registrations.update({ status: canceled }, { where: {student_id: Number(studentId)} }, { transaction: transaction })
                
                return res.status(200).json({ message: `Student ${studentId} registrations canceled` })
            })
        
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}



module.exports = ControllerPeople