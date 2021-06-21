const todo = require("../models/todos")
const create = (data) =>{
    //call dp
    return todo.create(data).catch(console.log)

}

const findAll = () =>{
    return todo.findAll()
}

const findById = (id) =>{
    return todo.findOne({where: {id}})
}

const editById = (id,data) =>{
    return todo.update(data,{where:{id}})
}

const deleteById = (id) => {
    return todo.destroy({where:{id}})
}
module.exports ={
    create,
    findAll,
    findById,
    editById,
    deleteById
}