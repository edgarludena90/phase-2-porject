import React from 'react'

function Header() {
  return(
  <header>
    <nav>
      <h1 className='branding'>
        <span className='logo'>{'//'}</span>
        Project Showcase
      </h1>
      <div className='navigation'>
        <a className='button' href='/projects'>
          All Projects
        </a>
        <a className='button' href='/projects/new'>
          Add Project
        </a>
        <button></button>
      </div>
    </nav>
  </header>
  )
}

export default Header
