const models = [
    require('../routes/suppliers/SupplierModelTable'),
    require('../routes/suppliers/products/ProductsModelTable')
]

async function createTables () {
    for (i=0; i<models.length; i++){
        const model = models[i]
        await model.sync()
    }
}

createTables()