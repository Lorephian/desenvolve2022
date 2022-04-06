const router = require('express').Router()
const SuppliersTable = require('./SuppliersTable')

router.use('/', async (req, res) => {
  const results = await SuppliersTable.listar()
  res.send(JSON.stringify(results)
  )
  })

module.exports = router
