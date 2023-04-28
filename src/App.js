import {useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios'
import {Routes, Route} from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import { Navigate } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   const onClose = (id)=>{
         const filtered = characters.filter((character)=>character.id !== Number(id))
         setCharacters(filtered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Navigate to='/404' />} />
            <Route path='/404' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
