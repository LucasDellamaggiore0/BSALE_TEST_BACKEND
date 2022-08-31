const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    return sequelize.define('category', {
        id:{
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    })
}