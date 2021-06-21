const {DataTypes} = require ("sequelize")
const sequelize = require("../dp")


const todos = sequelize.define("todos",{
    content : {
        type: DataTypes.STRING
    }
})

todos.belongsTo(user)
todos.sync({})

module.exports = todos