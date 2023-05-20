const http = require("http")
const data = require("./utils/data.js")

const PORT = 3001
const HOST = "localhost"

module.exports=
    http.createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin','*')
        
        console.log(`Server Listening on: http://${HOST}:${PORT}`)
        
        const characterPath="/rickandmorty/character"
        
        if(req.url.includes(characterPath) && req.url > characterPath + "/"){
            
            const characterId = req.url.substring(req.url.length - 1)
            const [character] = data.filter(character=> Number(characterId) === character.id)
            
            if(character){
                res.writeHead(200,{"Content-Type":"application/json"})
                res.end(JSON.stringify(character))  
                return
            }
        }
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end("Route not found") 
    }).listen(PORT,HOST)