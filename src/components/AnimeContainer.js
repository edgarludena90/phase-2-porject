import React from 'react'
import AnimeCard from './AnimeCard'
function AnimeContainer({ HerosList, VilliansList }) {
  const heroCard = HerosList?.map(hero => {
    return (
      <AnimeCard
        key={hero.id}
        id={hero.id}
        name={hero.name}
        bio={hero.bio}
        stats={hero.stats}
        image={hero.image}
        goal={hero.goal}
        videoUrl={hero.videoUrl}
        origin={hero.origin}
      />
    )
  })
  const villianCard = VilliansList?.map(hero => {
    return (
      <AnimeCard
        key={hero.id}
        id={hero.id}
        name={hero.name}
        bio={hero.bio}
        stats={hero.stats}
        image={hero.image}
        goal={hero.goal}
        videoUrl={hero.videoUrl}
        origin={hero.origin}
      />
    )
  })
  return (
    <div className='container'>
      {heroCard} {villianCard}
    </div>
  )
}

export default AnimeContainer