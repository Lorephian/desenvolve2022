const { Router } = require('express')
const ControllerPeople = require('../controllers/ControllerPeople')

const router = Router()

router.get('/people/all', ControllerPeople.catchAllPeople)
router.get('/people', ControllerPeople.catchActivePeople)
router.get('/people/:id', ControllerPeople.catchOnePerson)
router.get('/people/:studentId/registration/:registrationId', ControllerPeople.catchOneRegistration)
router.get('/people/studentId:/registration', ControllerPeople.catchOneRegistration)
router.get('/people/registration/:registrationId/confirmed', ControllerPeople.catchRegistrationByClass)
router.get('/people/registration/full', ControllerPeople.catchFullClasses)
router.put('/people/:id', ControllerPeople.updatePerson)
router.put('/people/:studentId/registration/:registrationId', ControllerPeople.updateRegistration)
router.post('/people', ControllerPeople.createPerson)
router.post('/people/studentId/cancel', ControllerPeople.cancelPerson)
router.post('/people/:id/restore', ControllerPeople.restorePerson)
router.post('/people/:studentId/registration', ControllerPeople.createRegistration)
router.delete('/people/:id', ControllerPeople.deletePerson)
router.delete('/people/:studentId/registration/:registrationId', ControllerPeople.deleteRegistration)
module.exports = router