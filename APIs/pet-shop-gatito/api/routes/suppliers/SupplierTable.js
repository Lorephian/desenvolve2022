const Model = require('./SupplierModelTable')
const NotFound = require('../../errors/NotFound')

module.exports = {
    list () {
        return Model.findAll({raw: true})
    },

    insert(supplier){
        return Model.create(supplier)
    },

    async catchById (id) {
        const found = await Model.findOne({
            where: {
                id: id
            }
        })

        if (!found) {
            throw new NotFound()
        }

        return found
    }, 

    update (id, dataToUpdate) {
        return Model.update(
            dataToUpdate, {
                where: {id: id}
            }
        )
    },

    remove (id) {
        return Model.destroy({
            where: {id: id}
        })
    }

}