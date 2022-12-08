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
        <div className='card__content'>
          <div className='card__title'>{name}</div>
          <div className='card__detail'>
            <div className='info-btn'>
            <Link to={`/info/${id}`}>show more</Link>
            <div className='card__likes'>
            {animeLikes ? (
              <Button onClick={likeButton} id='like-button'>
                💔
              </Button>
            ) : (
              <Button onClick={likeButton} id='like-button'>
                ❤️
              </Button>
            )}
            </div>
            </div>
            <div className='card__stats'>
            </div>
          </div>
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
