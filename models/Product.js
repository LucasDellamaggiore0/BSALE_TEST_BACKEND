const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    return sequelize.define('product', {
        id:{
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        },
        url_image:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.FLOAT
        },
        discount: {
            type: DataTypes.INTEGER
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    })
}