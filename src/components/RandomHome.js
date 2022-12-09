import React, {useState, useEffect}  from 'react'
import { Card } from 'react-bootstrap'
import styled, {keyframes} from 'styled-components'
 

function RandomHome({characters}) {
  const [isLoading, setIsLoading] = useState(false)
  const [anime, setAnime] = useState(null)
  
  const textfade = keyframes`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);

    }`

    const Title =styled.h1`
    animation-name: ${textfade};
    animation-duration: 2s;
    `

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
      }, 3000 )

    })
  }


  return (
    <div>
    <Title className='welcome'>
      Welcome to Anime Land
    </Title>
    
    <div  > 
    <iframe className='anime-trailer'
    
    width="850" 
    height="415" 
    src="https://www.youtube.com/embed/fQ6PRbh-ntM?autoplay=1&mute=true" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

    <Title className='btn-title'> Which Character Are You? </Title>

      
    {!isLoading ? <img className='giphy' src="http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif"/>  : null}
    {anime && isLoading ? (
      <Card id="random-card"> 

        <img src={anime.image}/>
        <p></p>
      </Card>
    ) : null}
    
    <button className='r-btn' onClick={getRandomAnime}>
      CLICK HERE
    </button>
  </div>
  </div>
  )
}

export default RandomHome