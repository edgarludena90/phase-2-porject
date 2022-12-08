import React, { useState } from 'react'

const api = 'http://localhost:4000/Characters'

function NewAnimeForm({ addedAnime, setAddedAnime }) {
  const [newAnime, setNewAnime] = useState('')
  const [newVideo, setNewVideo] = useState('')
  const [newBio, setNewBio] = useState('')
  const [newImage, setNewImage] = useState('')

  const addAnime = e => {
    e.preventDefault()
    fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newAnime,
        image: newImage,
        videoUrl: newVideo,
        bio: newBio,
      }),
    })
      .then(res => res.json())
      .then(res => setAddedAnime([...addedAnime, res]))
  }
  // ask how to add a a toggle button on hwo to go back and forth from vilian to hero
  //also to add functionality to the "moreinfo button"
  return (
    <div className='new-Anime-form' onSubmit={addAnime}>
      <div> </div>

      <h2>New Anime</h2>
      <form>
        <input
          type='text'
          name='name '
          placeholder='name'
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
