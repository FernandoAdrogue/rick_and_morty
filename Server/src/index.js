const http = require("http")
//const data = require("./utils/data.js")
const { getCharById } = require("./controllers/getCharById.js")
const dotenv = require('dotenv').config()
const {PORT, HOST} = process.env

module.exports=
    http.createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*')
        
        const characterPath="/rickandmorty/character"
            if(req.url.includes(characterPath)){
                const id = req.url.split("/").at(-1)
                if(id){
                    getCharById(res,id)
                    return
                }
        }
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end("Route not found") 
    }).listen(PORT,HOST,()=>{console.log(`Server Listening on: http://${HOST}:${PORT}`)})//se ejecuta cuando se crea el server