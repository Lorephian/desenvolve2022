const Model = require('./suppliersModelTable')

module.exports = {
    listar () {
        return Model.findAll()
    }
}