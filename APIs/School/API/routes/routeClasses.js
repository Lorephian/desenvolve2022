const { Router } = require('express')
const ControllerClasses = require('../controllers/ControllerClasses')

const router = Router()
router
 .get('/turmas', ControllerClasses.pegaTodasAsTurmas)
 .get('/turmas/:id', ControllerClasses.pegaUmaTurma)
 .post('/turmas', ControllerClasses.criaTurma)
 .put('/turmas/:id', ControllerClasses.atualizaTurma)
 .delete('/turmas/:id', ControllerClasses.apagaTurma)
module.exports = router