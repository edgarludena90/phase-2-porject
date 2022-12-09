import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AnimeCard({ id, name, bio, stats, image, goal, videoUrl, origin }) {
  const [animeLikes, setAnimeLikes] = useState(true)
  function likeButton() {
    setAnimeLikes(likes => !likes)
    
  }
  return (
    <div className='cards-container'>
      <div className='card'>
        <img src={image} alt={name} className='card__image' />
          <div className='card__title'>{name}</div>
        <div className='card__content'>
            <Link to={`/info/${id}`}>
              <button className='detail-btn'>show more</button>
              </Link>
            {animeLikes ? (
              <button onClick={likeButton} id='like-button'>
                💔
              </button>
            ) : (
              <button onClick={likeButton} id='like-button'>
                ❤️
              </button>
            )}
            
        </div>
      </div>
    </div>
  )
}

export default AnimeCard

// {
//   animeLikes ? (
//     <button onClick={likeButton} className='primary'></button>
//   ) : (
//     <button onClick={likeButton}>Out of Stock</button>
//   )
// }
