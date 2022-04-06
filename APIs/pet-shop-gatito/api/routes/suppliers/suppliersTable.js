const Model = require('./suppliersModelTable')

module.exports = {
    listar () {
        return Model.findAll()
    },
    insert(supplier){
return Model.create(supplier)
    }
}