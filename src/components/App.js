import { Routes, Route } from 'react-router-dom'
import RandomHome from './RandomHome'
import Header from './Header'
import AnimeContainer from './AnimeContainer'
import AnimePage from './AnimePage'
import React, { useState, useEffect } from 'react'
import AddAnime from './AddAnime'
import AnimeDetail from './AnimeDetail'
const api1 = 'http://localhost:4000/Heroes'
const api2 = 'http://localhost:4000/Villians'
function App() {
  // created 2 useStates one for the villains one for the heros
  const [HerosList, setHerosList] = useState([])
  const [VilliansList, setVilliansList] = useState([])
  // for useState for the add anime form
  const [addedAnime, setAddedAnime] = useState('')
  //the useState below is for the characterpage/ask gehrig to double check lol
  const [animeInfo, setAnimeInfo] = useState([])

  useEffect(() => {
    fetch(api1)
      .then(response => response.json())
      .then(res => setHerosList(res))
  }, [])

  useEffect(() => {
    fetch(api2)
      .then(response => response.json())
      .then(res => setVilliansList(res))
  }, [])

  return (
    <div className='App'>
      <Header VilliansList={VilliansList} HerosList={HerosList} />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div>
              <RandomHome heroes={HerosList} villians={VilliansList} />
            </div>
          }
        />
        <Route
          path='/char'
          element={
            <div>
              <AnimeContainer
                VilliansList={VilliansList}
                HerosList={HerosList}
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
