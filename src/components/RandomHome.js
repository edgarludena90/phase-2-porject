import React, {useState, useEffect}  from 'react'
import { Card } from 'react-bootstrap'
 

function RandomHome({heroes, villians}) {
  const [isLoading, setIsLoading] = useState(false)
  const [anime, setAnime] = useState(null)

  function getRandomAnime() {
    setIsLoading(true)
      let routes = ["Heroes", "Villians"]
      let randomIndex = Math.floor(Math.random() * routes.length)
      let foundRoute = routes[randomIndex]
      console.log(foundRoute)
    let randNum = Math.floor(Math.random() * heroes.length) 
    fetch(`http://localhost:4000/${foundRoute}/${randNum}`)
     .then(res => res.json())
     .then(data => {
      setTimeout(() => {
        setAnime(data)
        setIsLoading(false)
      }, "1500")

    })
  }
  console.log(isLoading)
  return(
    <div> 
    <button onClick={getRandomAnime}>
      Get Random Anime
    </button>
    {isLoading ? <h1>...Loading</h1> : null}
    {anime ? (
      <Card id="random-card"> 
        <img src={anime.image}/>
      </Card>
    ) : null}
  </div>
  )
}

export default RandomHome