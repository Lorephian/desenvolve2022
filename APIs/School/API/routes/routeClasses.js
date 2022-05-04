const { Router } = require('express')
const ControllerClasses = require('../controllers/controllerClasses')

const router = Router()
router
 .get('/classes', ControllerClasses.catchAllClasses)
 .get('/classes/:id', ControllerClasses.catchOneClass)
 .post('/classes', ControllerClasses.createClass)
 .put('/classes/:id', ControllerClasses.updateClass)
 .delete('/classes/:id', ControllerClasses.deleteClass)
module.exports = router