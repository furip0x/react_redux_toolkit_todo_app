import React from 'react'
// WIP
const ThemeToggle = () => {
  return (
    <div className='theme-toggle'>
      <input type='checkbox' id='switch' />
      <label htmlFor='switch'>
        <div className='toggle'></div>
        <div className='names'>
          <p className='light'>Light</p>
          <p className='dark'>Dark</p>
        </div>
      </label>
    </div>
  )
}

export default ThemeToggle
