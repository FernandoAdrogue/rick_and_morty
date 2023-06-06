const express = require("express")

const postsRuter = express.Router()

postsRuter.get("/",(req,res)=>{
    res.send("Estoy en el GET de posts")
})
postsRuter.post("/",(req,res)=>{
    res.send("Estoy en el POST de posts")
})
postsRuter.get("/3",(req,res)=>{
    res.send("Estoy en el detalle del posts 3")
})

module.exports = postsRuter