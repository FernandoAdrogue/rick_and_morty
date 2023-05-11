import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from './Favorites.module.css'
import { removeFav, getAllFav } from "../../redux/actions"
import { orderCards,filterCards } from "../../redux/actions"
import { useEffect, useState } from "react"
const Favorites =()=>{

   const [aux,setAux] = useState(false)
   
   const dispath= useDispatch()

    const myFavorites= useSelector((state)=> state.myFavorites)
    
    const onClose = (id)=>{
        dispath(removeFav(id))
        dispath(getAllFav())
    }
    const handleOrder = (event) =>{
      const {value} = event.target
      dispath(orderCards(value))
      aux ? setAux(false):setAux(true)
    }

    const handleFilter = (event) => {
      const {value} = event.target
      dispath(filterCards(value))
      aux ? setAux(false):setAux(true)
    }

    useEffect(()=>{//set Ascendant Filter on mount component
      const value = "A"
      dispath(orderCards(value))
      aux ? setAux(false):setAux(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

        return ( 
         <div className={styles.favContainer}>
            <div className={styles.selectContainer}>
               <select onChange={handleOrder}>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
               </select>
               <select onChange={handleFilter}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
               </select>
            </div>
            <div className={styles.carrucelFav}>
                {myFavorites.map( ({id,name,status,species,gender,origin,image}) => {
                     return(
                              <Card
                                 key={id}
                                 id={id}
                                 name={name}
                                 status={status}
                                 species={species}
                                 gender={gender}
                                 origin={origin.name}
                                 image={image}
                                 onClose={onClose}
                              />
                           ) 
                        }
                     )
                  }
            </div>
         </div>
         )
}

export default Favorites