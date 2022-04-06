const TableModel = require('../routes/suppliers/suppliersModelTable')

TableModel
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)