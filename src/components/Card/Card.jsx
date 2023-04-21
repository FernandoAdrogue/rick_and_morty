import React from "react"
import styles from './Card.module.css'
import CloseButton from "../CloseButton/CloseButton"


export default function Card({name,status,species,gender,origin,image,onClose}) {
   return(
      <div className={styles.cardContainer}>
         <CloseButton onClick={onClose} textButton={"Cerrar"}/>
         <div className={styles.stikerCard}>
            <h2 className={styles.subTitle}>{name}</h2>
            <h2 className={styles.subTitle}>{status}</h2>
            <h2 className={styles.subTitle}>{species}</h2>
            <h2 className={styles.subTitle}>{gender}</h2>
            <h2 className={styles.subTitle}>{origin}</h2>
            <div className={styles.imgCard}>
               <img src={image} alt='Caricatura del Personaje' />
            </div>
         </div>
      </div>
   ) 
} 