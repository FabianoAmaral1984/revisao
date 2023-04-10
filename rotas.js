const express = require("express")

const routes = express.Router()

let lista = [   {"id":1,"nome":"Joao","idade":20},
                {"id":2,"nome":"Maria","idade":25},
                {"id":3,"nome":"Paula","idade":35}]

routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})

module.exports =  routes