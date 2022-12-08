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

  return (
    <div className='Anime-detail'>
      <h1>{characterDetail.name}</h1>
      <p> {characterDetail.bio}</p>
      <p> {characterDetail.Goal}</p>
      <p> {characterDetail.origin}</p>
      <img src={characterDetail.image} alt={''} />
      <iframe
        width='560'
        height='315'
        src={characterDetail.videoUrl}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default AnimeDetail
