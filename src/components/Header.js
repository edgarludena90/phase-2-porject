import React from 'react'

function Header() {
  return (
    <header>
      <nav>
        <h1 className='branding'>
          <span className='logo'>{'//'}</span>
          ANIME WORLD
        </h1>
        <div className='navigation'>
          <a className='button' href='/projects'>
            ANIME BIO
          </a>
          <a className='button' href='/projects/new'>
            ANIME HIGHLIGHTS
          </a>
          <a className='button' href='/projects/new'>
            ADD YOUR ANIME
          </a>
          
        </div>
      </nav>
    </header>
  )
}

export default Header
