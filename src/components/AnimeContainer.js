import React from 'react'
import AnimeCard from './AnimeCard'
function AnimeContainer({ CharactersList }) {
  const charCard = CharactersList?.map(character => {
    return (
      <AnimeCard
        key={character.id}
        id={character.id}
        name={character.name}
        bio={character.bio}
        stats={character.stats}
        image={character.image}
        goal={character.goal}
        videoUrl={character.videoUrl}
        origin={character.origin}
      />
    )
  })

  return (
    <div id='wrapper'>
      <div className='container'>
      {charCard}
      </div>
    </div>
  )
}

export default AnimeContainer