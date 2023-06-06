let myFavorites = []

const postFav = (req,res)=>{
    const character = myFavorites.push(req.body)

    try{
        myFavorites.push(character)
        res.status(200).json(myFavorites)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteFav = (req,res)=> {
    const {id} = req.params
    try {
        myFavorites = myFavorites.filter((character)=>{
            return Number(id) !== character.id
        })
        res.status(200).json(myFavorites)
    }
    catch(error){
        res.status(500).json({message: error.message})   
    }
}

module.exports= {
    postFav,
    deleteFav
}