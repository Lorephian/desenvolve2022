const { Router } = require('express')
const ControllerPeople = require('../controllers/ControllerPeople')

const router = Router()

router.get('/people', ControllerPeople.catchAllPeople)

module.exports = router