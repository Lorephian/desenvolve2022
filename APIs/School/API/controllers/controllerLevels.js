class ControllerLevels {

    static async catchAllLevels(req, res) {
      try {
        const allLevels = await database.Levels.findAll()
        return res.status(200).json(allLevels)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}