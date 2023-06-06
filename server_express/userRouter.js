const express = require("express")

const userRouter = express.Router()

userRouter.get("/",(req,res)=>{
    const {name}= req.query
    if(!name) return res.send("Devuelve todos los usuarios")
    return res.send(`Devuelve la info del usuario ${name}`)
})

userRouter.post("/",(req,res)=>{
    console.log(req.body)
    res.send("Estoy en el POST de users")
})

userRouter.get("/:id",(req,res)=>{
    res.send(`Estoy en el detalle del users ${req.params.id}` )
})



module.exports = userRouter
