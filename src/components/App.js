import { Routes, Route } from 'react-router-dom'
import RandomHome from './RandomHome'
import Header from './Header'
import AnimeContainer from './AnimeContainer'
import AnimeCard from './AnimeCard'
import React, { useState, useEffect } from 'react'

const api1 = 'http://localhost:4000/Heroes'
const api2 = 'http://localhost:4000/Villians'
function App() {
  // created 2 useStates one for the villains one for the heros
  const [HerosList, setHerosList] = useState([])
  const [VilliansList, setVilliansList] = useState([])

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
              <RandomHome />
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
      </Routes>
    </div>
  )
}

export default App
