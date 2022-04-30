class ControllerClass {

    static async catchAllClasses(req, res) {
      try {
        const allClasses = await database.Classes.findAll()
        return res.status(200).json(allClasses)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
}