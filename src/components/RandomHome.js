import React, {useState, useEffect}  from 'react'
import { Card } from 'react-bootstrap'
 

function RandomHome({characters}) {
  const [isLoading, setIsLoading] = useState(false)
  const [anime, setAnime] = useState(null)
  

  function getRandomAnime() {
    setIsLoading(true)
      let routes = ["Characters"]
      let randomIndex = Math.floor(Math.random() * routes.length)
      let foundRoute = routes[randomIndex]
      console.log(foundRoute)
    let randNum = Math.floor(Math.random() * (characters.length -1) ) + 1  
    fetch(`http://localhost:4000/${foundRoute}/${randNum}`)
     .then(res => res.json())
     .then(data => {
      setTimeout(() => {
        setAnime(data)
        setIsLoading(false)
      }, "1000")

    })
  }



  return (
    <div className='r-btn' > 
    {isLoading ? <img className='giphy' src="https://64.media.tumblr.com/4b36f39fa7f11002110ea5498095ccca/tumblr_n05ialS7Gv1sh547so1_500.gif"/>  : null}
    {anime && !isLoading ? (
      <Card id="random-card"> 

        <img src={anime.image}/>
        <p>Hello</p>
      </Card>
    ) : null}
    <button onClick={getRandomAnime}>
      Get Random Anime
    </button>
  </div>
  )
}

export default RandomHome