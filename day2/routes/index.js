const express = require("express")

const router = express.Router()

const todosRoutes = require("./todos")
const usersRoutes = require("./users")

router.use("/todos", todosRoutes)
router.use("/users", usersRoutes)

module.exports = router