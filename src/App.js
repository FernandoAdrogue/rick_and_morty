import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
// eslint-disable-next-line no-unused-vars
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
        <div>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
        <hr></hr>
        <div>
         <Cards characters={characters} />
        </div>
        <hr></hr>
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
