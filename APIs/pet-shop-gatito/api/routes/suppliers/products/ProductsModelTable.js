const Sequelize = require('sequelize')

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
        allowNull: false

    }
}