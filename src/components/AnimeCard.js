import React from 'react'
import { Button } from 'react-bootstrap';

function AnimeCard({ id, name, bio, stats, image, goal, videoUrl, origin }) {
  return (
    <div className="cards-container">
      <div className="card">
        <img 
          src={image}
          alt={name}
          className="card__image"
        />
      <div className="card__content">
        <div className="card__title">{name}</div>
        {/*  */}
        <div className="card__detail">
          <Button variant='primary'>More 👻</Button>

          <Button id='like-button'> ❤️ </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AnimeCard

