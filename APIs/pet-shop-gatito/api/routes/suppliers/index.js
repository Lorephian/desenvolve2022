const router = require('express').Router()
const SuppliersTable = require('./SuppliersTable')
const Supplier = require ('./supplier')

router.get('/', async (req, res) => {
  const results = await SuppliersTable.listar()
  res.send(JSON.stringify(results)
  )
  })

  router.post('/', async (req, res) => {
const receivedData = req.body
const supplier = new Supplier(receivedData)
await supplier.create()
res.send(
  JSON.stringify(supplier)
)
  })

module.exports = router
