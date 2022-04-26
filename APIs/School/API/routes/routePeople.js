const { Router } = require('express')
const ControllerPeople = require('../controllers/ControllerPeople')

const router = Router()

router.get('/people', ControllerPeople.catchAllPeople)
router.get('/people/:id', ControllerPeople.catchOnePerson)
router.post('/people', ControllerPeople.createPerson)
router.put('/people/:id', ControllerPeople.updatePerson)
router.delete('/people/:id', ControllerPeople.deletePerson)

module.exports = router