import React from 'react';
import Card from './Card';

export default function Cards({characters}) {
   const onClose = () => window.alert('Emulamos que se cierra la card');
   return ( 
      <div>
         {characters.map( ({name,status,species,gender,origin,image}) => {
            return(
                     <Card
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
      
   )
}
