import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'

function AnimeDetail() {
  const [characterDetail, setCharacterDetail] = useState([])
  const { id } = useParams()
  console.log(characterDetail)
  useEffect(() => {
    fetch(`http://localhost:4000/Characters/${id}`)
      .then(response => response.json())
      .then(res => setCharacterDetail(res))
  }, [])
  
  {/* <img src={characterDetail.image} alt={''} /> */}
  return (
    <div className='anime-detail'>
      <h1 className='detail.name'>{characterDetail.name}</h1>
      <iframe
        width='850'
        height='415'
        src={characterDetail.videoUrl}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <div className='char-detail'>
      <p className='detail.bio'> {characterDetail.bio}</p>
      <p className='goal'> Goal : {characterDetail.Goal}</p>
      <p className='origin'> Origin:  {characterDetail.origin}</p>
      </div>
    </div>
  )
}

export default AnimeDetail
