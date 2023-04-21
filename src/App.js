import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
// eslint-disable-next-line no-unused-vars
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
        <div>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
        <div>
         <Cards characters={characters} />
        </div>
        <div>
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
        </div>
      </div>
   );
}

export default App;
