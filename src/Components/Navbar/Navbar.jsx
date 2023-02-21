import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='abc'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/about'>About</NavLink>
    </div>
  )
}

export default Navbar