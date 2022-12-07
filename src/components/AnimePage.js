import React from 'react'

function AnimePage({ animeInfo }) {
  const infoAnime = animeInfo?.map(info => {
    console.log(infoAnime)
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
  return (
    <div id='wrapper'>
      <div className='container'>{infoAnime}</div>
    </div>
  )
}

export default AnimePage
