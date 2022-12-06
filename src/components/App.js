//react router imports
// import { Switch } from 'react-router-dom'

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
      <header className='App-header'>
        {/* <Switch> */}
          {/* <Route> */}
          {/* <RandomHome/> */}
          {/* </Route> */}
          <AnimeContainer VilliansList={VilliansList} HerosList={HerosList} />
          <AnimeCard />
          <Header />
        {/* </Switch> */}
      </header>
    </div>
  )
}

export default App
