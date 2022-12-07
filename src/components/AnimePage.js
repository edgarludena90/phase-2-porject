import React from 'react'

function AnimePage({ animeInfo, setAnimeInfo }) {
  const infoAnime = animeInfo?.map(info => {
    return (
      <AnimePage
        key={info.id}
        id={info.id}
        name={info.name}
        bio={info.bio}
        stats={info.stats}
        image={info.image}
        goal={info.goal}
        videoUrl={info.ReactvideoUrl}
        origin={info.origin}
      />
    )
  })
}

export default AnimePage
