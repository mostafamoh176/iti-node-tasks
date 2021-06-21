const express = require("express")
const todos = require("../controllers/todos")
const router = express.Router()

router.post("/",(req,res) =>{
    const {body} = req;
    //call controller
    todos.create(body)
    res.status(204).end()
})

router.get("/", async (req,res) =>{
    const alltodos = await todos.findAll()
    res.json(alltodos)
})

router.get("/:id", async (req,res) =>{
    const {id} = req.params
    const todo = await todos.findById(id)
    if(!todo){
        res.status(404).end()
        return
    }
    res.json(todo)
})

router.patch("/:id", async (req,res) =>{
    const {body , params:{id}} = req
    await todos.editById(id,body)
    res.status(204).end()
})

router.delete("/:id", async (req,res) =>{
    const {id} = req.params;
    await todos.deleteById(id)
    res.status(204).end()
})

module.exports = router