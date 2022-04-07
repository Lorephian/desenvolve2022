const TableModel = require('../routes/suppliers/SupplierModelTable')

TableModel
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)