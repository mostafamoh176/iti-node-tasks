const express = require("express")
const users = require("../controllers/users")
const router = express.Router()

router.post("/",(req,res) =>{
    const {body} = req;
    //call controller
    users.create(body)
    res.status(204).end()
})

router.get("/", async (req,res) =>{
    const allusers = await users.findAll()
    res.json(allusers)
})

router.get("/:id", async (req,res) =>{
    const {id} = req.params
    const todo = await users.findById(id)
    if(!todo){
        res.status(404).end()
        return
    }
    res.json(todo)
})

router.patch("/:id", async (req,res) =>{
    const {body , params:{id}} = req
    await users.editById(id,body)
    res.status(204).end()
})

router.delete("/:id",(req,res) =>{
    const {id} = req.params;
    await users.deleteById(id)
    res.status(204).end()
})

module.exports = router