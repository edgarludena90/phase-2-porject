import React, { useState } from 'react'

const heroApi = 'http://localhost:4000/Heroes'
const villianApi = 'http://localhost:4000/Villians'

function NewAnimeForm({ addedAnime, setAddedAnime }) {
  const [newAnime, setNewAnime] = useState('')
  const [newVideo, setNewVideo] = useState('')
  const [newBio, setNewBio] = useState('')
  const [newImage, setNewImage] = useState('')
  const [isHero, setIsHero] = useState(false) // for the check box function 

  const addAnime = e => {
    e.preventDefault()
    const postUrl = isHero ? heroApi : villianApi
    fetch(postUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Anime: newAnime,
        image: newImage,
        video: newVideo,
        bio: newBio,
      }),
    })
      .then(res => res.json())
      .then(res => setAddedAnime([...addedAnime, res]))
  }

  return (
    <div className='new-Anime-form' onSubmit={addAnime}>
      <div
        className='checkBoxe'
        onChange={() => {
          setIsHero(!isHero)
        }}
      >
        {' '}
      </div>

      <h2>New Anime</h2>
      <form>
        <input
          type='text'
          name='name'
          placeholder='Anime name'
          value={newAnime}
          onChange={e => setNewAnime(e.target.value)}
        />
        <input
          type='text'
          name='image'
          placeholder='Image URL'
          value={newImage}
          onChange={e => setNewImage(e.target.value)}
        />
        <input
          type='text'
          name='video'
          placeholder='Video Url'
          value={newVideo}
          onChange={e => setNewVideo(e.target.value)}
        />
        <input
          type='text'
          name='Bio'
          placeholder='Anime Bio'
          value={newBio}
          onChange={e => setNewBio(e.target.value)}
        />
        <button onClick={addAnime} type='submit'>
          ADD ANIME HERE
        </button>
      </form>
    </div>
  )
}

export default NewAnimeForm
