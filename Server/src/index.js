const http = require("http")
const data = require("./utils/data.js")
const dotenv = require('dotenv').config()
const {PORT, HOST} = process.env



module.exports=
    http.createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*')
        
        const characterPath="/rickandmorty/character"
            if(req.url.includes(characterPath)){
                const characterId = req.url.split("/")[3]
                if(characterId){
                    const [character] = data.filter(character=> Number(characterId) === character.id)
                    if(character){
                        res.writeHead(200,{"Content-Type":"application/json"})
                        res.end(JSON.stringify(character))  
                        return
                    }
                }
        }
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end("Route not found") 
    }).listen(PORT,HOST,()=>{console.log(`Server Listening on: http://${HOST}:${PORT}`)})//se ejecuta cuando se crea el server