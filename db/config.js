require('dotenv').config()
const mysql = require('mysql')
const { Sequelize, Op } = require('sequelize')
const { HOST_DB, USER_DB, PASSWORD_DB, NAME_DB } = process.env

const db_config = {
    host: HOST_DB,
    database: NAME_DB,
    user: USER_DB,
    password: PASSWORD_DB
}

const sequelize = new Sequelize(NAME_DB, USER_DB, PASSWORD_DB, {
    host: HOST_DB,
    dialect: 'mysql'
})

// sequelize.authenticate()
//     .then(() => console.log('Conectado'))
//     .catch((err) => console.log(err))

let connection;

const models = {
    product: require('../models/Product')(sequelize),
    category: require('../models/Category')(sequelize)
}

const { product, category } = sequelize.models

// //! RELATIONS

product.belongsTo(category, { as: "category_category", foreignKey: "category"})
category.hasMany(product, { as: "products", foreignKey: "category"})


//! KEEP ALIVE - EVITA QUE CADUQUE LA SESION CADA 5s
function handleConnection() {
    connection = mysql.createConnection(db_config)
    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleConnection, 5000);
        }
        console.log("Base de datos conectada", connection.threadId)
    });

    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    });
}



module.exports = {
    handleConnection,
    ...sequelize.models,
    Op
}