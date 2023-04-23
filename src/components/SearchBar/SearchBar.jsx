import React from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={styles.containerBar}>
         <input className={styles.inputBar} type='search' />
         <button className={styles.buttonBar}onClick={(characterID)=>{onSearch(characterID)}}>
         <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f5f3f3">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
               <path d="M6 5a1 1 0 012 0v1h1a1 1 0 010 2H8v1a1 1 0 01-2 0V8H5a1 1 0 010-2h1V5z"></path> 
               <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13c1.296 0 2.496-.41 3.476-1.11l2.817 2.817a1 1 0 001.414-1.414l-2.816-2.816A6 6 0 107 13zm0-2a4 4 0 100-8 4 4 0 000 8z"></path> 
            </g>
         </svg>
         </button>
      </div>
   );
}
