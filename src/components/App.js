import './App.css';
import Header from './Header'
import AnimeContainer from './AnimeContainer'
import AnimeCard from './AnimeCard'
import React,{useState ,useEffect} from 'react';
function App() {
  const [animeCharacters, setAnimeCharacters]= useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <AnimeCard/>
        <AnimeContainer/>


      </header>
    </div>
  );
}

export default App;
