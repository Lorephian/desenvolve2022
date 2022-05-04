class ControllerLevels {

    static async catchAllLevels(req, res) {
      try {
        const allLevels = await database.Levels.findAll()
        return res.status(200).json(allLevels)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async catchOneLevel(req, res) {
        const {id} = req.params
        try{
            const oneLevel = await database.Levels.findOne( {where: { id: Number(id)}})
            return res.status(200).json(oneLevel)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createLevel(req, res) {
        const newLevel = req.body
        try{
            const newCreatedLevel = await database.Levels.create(newLevel)
            return res.status(200).json(newCreatedLevel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updateLevel(req, res) {
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.Levels.update(newInfos, {where: {id:Number(id)}})
            const updatedPerson = await database.Levels.findOne({where: {id: Number(id)}})
            return res.status(200).json(updatedPerson)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deleteLevel(req, res) {
        const {id} = req.params
        try {
            await database.Levels.destroy({where: {id: Number(id)}})
            return res.status(200).json({message: `id ${id} deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ControllerLevels