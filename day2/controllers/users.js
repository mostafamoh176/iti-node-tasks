const user = require("../models/users")
const create = (data) =>{
    //call dp
    return user.create(data).catch(console.log)

}

const findAll = () =>{
    return user.findAll()
}

const findById = (id) =>{
    return user.findOne({where: {id}})
}

const editById = (id,data) =>{
    return user.update(data,{where:{id}})
}

const deleteById = (id) => {
    return user.destroy({where:{id}})
}
module.exports ={
    create,
    findAll,
    findById,
    editById,
    deleteById
}