const { Router } = require('express')
const ControllerPeople = require('../controllers/ControllerPeople')

const router = Router()

router.get('/people/all', ControllerPeople.catchAllPeople)
router.get('/people', ControllerPeople.catchActivePeople)
router.get('/people/:id', ControllerPeople.catchOnePerson)
router.post('/people', ControllerPeople.createPerson)
router.put('/people/:id', ControllerPeople.updatePerson)
router.delete('/people/:id', ControllerPeople.deletePerson)
router.get('/people/:studentId/registration/:registrationId', ControllerPeople.catchOneRegistration)
router.post('/people/:studentId/registration', ControllerPeople.createRegistration)
router.put('/people/:studentId/registration/:registrationId', ControllerPeople.updateRegistration)
router.delete('/people/:studentId/registration/:registrationId', ControllerPeople.deleteRegistration)
router.post('/people/:id/restore', ControllerPeople.restorePerson)
module.exports = router