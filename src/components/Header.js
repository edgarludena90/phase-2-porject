import React from 'react'

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <h1 className='branding'>
          <span className='logo'>{'//'}</span>
          ANIME WORLD
        </h1>
        <div className='navigation'>
          <a className='button' href='/'>
            HOME
          </a>
          <a className='button' href='/char'>
            CHARACTERS
          </a>
          <a className='button' href='/form'>
            ADD YOUR ANIME
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header