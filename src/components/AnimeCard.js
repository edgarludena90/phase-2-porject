import react from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function AnimeCard({ id, name, bio, stats, image, goal, videoUrl, origin }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{bio}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AnimeCard
