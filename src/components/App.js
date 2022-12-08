import { Routes, Route } from 'react-router-dom'
import RandomHome from './RandomHome'
import Header from './Header'
import AnimeContainer from './AnimeContainer'
import AnimePage from './AnimePage'
import React, { useState, useEffect } from 'react'
import AddAnime from './AddAnime'
import AnimeDetail from './AnimeDetail'
const api = 'http://localhost:4000/Characters'

function App() {
  const [CharactersList, setCharacersList] = useState([])
 
  const [addedAnime, setAddedAnime] = useState('')
  //the useState below is for the characterpage/ask gehrig to double check lol
  const [animeInfo, setAnimeInfo] = useState([])

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(res => setCharacersList(res))
  }, [])


  return (
    <div className='App'>
      <Header CharactersList={CharactersList}/>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div>
              <RandomHome characters={CharactersList} />
            </div>
          }
        />
        <Route
          path='/char'
          element={
            <div>
              <AnimeContainer
                CharactersList={CharactersList}
              />
            </div>
          }
        />

        <Route
          path='/form'
          element={
            <div>
              <AddAnime setAddedAnime={setAddedAnime} addedAnime={addedAnime} />
            </div>
          }
        />
        <Route
          path='/info/:id'
          element={
            <div>
              <AnimeDetail />
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
