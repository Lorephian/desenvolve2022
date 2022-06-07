const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ControllerClasses {

    static async catchAllClasses(req, res) {
    const { starting_date, ending_date} = req.query
    const where = {}
    starting_date || ending_date ? where.starting_date = {} : null
    starting_date ? where.starting_date[Op.gte] = starting_date : null
    ending_date ? where.starting_date[Op.lte] = ending_date : null
    
      try {
        const allClasses = await database.Classes.findAll({where})
        return res.status(200).json(allClasses)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

  

    static async catchOneClass(req, res) {
      const {id} = req.params
      try{
          const oneClass = await database.Classes.findOne( {
            where: { 
              id: Number(id)}
          })
          return res.status(200).json(oneClass)
      } catch(error) {
          return res.status(500).json(error.message)
      }
  }

  static async createClass(req, res) {
      const newClass = req.body
      try{
          const newCreatedClass = await database.Classes.create(newClass)
          return res.status(200).json(newCreatedClass)
      } catch (error) {
          return res.status(500).json(error.message)
      }
  }
  static async updateClass(req, res) {
      const {id} = req.params
      const newInfos = req.body
      try {
          await database.Classes.update(newInfos, {where: {id:Number(id)}})
          const updatedClass = await database.Classes.findOne({where: {id: Number(id)}})
          return res.status(200).json(updatedClass)
      } catch (error) {
          return res.status(500).json(error.message)
      }
  }
  static async deleteClass(req, res) {
      const {id} = req.params
      try {
          await database.Classes.destroy({where: {id: Number(id)}})
          return res.status(200).json({message: `id ${id} deleted`})
      } catch (error) {
          return res.status(500).json(error.message)
      }
  }
}

module.exports = ControllerClasses