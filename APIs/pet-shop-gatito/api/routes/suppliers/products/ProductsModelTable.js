const Sequelize = require('sequelize')
const instance = require('../../../database')

const columns = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    supplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../SupplierModelTable'),
            key: 'id'
        }
    }
}

const options = {
    freezeTableName: true,
    tableName: 'products',
    timestamps: true,
    createdAt: 'creationDate',
    updatedAt: 'updateDate',
    version: 'version'
}

module.exports = instance.define('product', columns, options)