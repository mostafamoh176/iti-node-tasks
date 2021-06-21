const {DataTypes} = require ("sequelize")
const sequelize = require("../dp")


const users = sequelize.define("users",{
    username : {
        type: DataTypes.STRING
    }
})

module.exports = users