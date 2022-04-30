//routes/niveisRoute.js

const { Router } = require('express')
const ControllerLevels = require('../controllers/controllerLevels')

const router = Router()
router
 .get('/levels', ControllerLevels.catchAllLevels)
 .get('/levels/:id', ControllerLevels.cathcOneLevel)
 .post('/levels', ControllerLevels.createLevel)
 .put('/levels/:id', ControllerLevels.updateLevel)
 .delete('/levels/:id', ControllerLevels.deleteLevel)
module.exports = router