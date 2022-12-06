import React from 'react'
import { Button } from 'react-bootstrap';

function AnimeCard({ id, name, bio, stats, image, goal, videoUrl, origin }) {
  return (
    <li className="cards-container">
      <div className="card">
        <img 
          src={image}
          alt={name}
          className="card__image"
        />
      <div className="card__content">
        <div className="card__title">{name}</div>
        <p className="card__text">{bio}</p>
        <div className="card__detail">
          <Button variant='primary'>ANIME ME</Button>
        </div>
      </div>
    </div>
  </li>
  )
}

export default AnimeCard

