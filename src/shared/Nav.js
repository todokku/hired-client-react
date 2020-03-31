import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/profiles'>Profiles</NavLink>
    <NavLink to='/create-profile'>Create a Profile</NavLink>
  </nav>
)

export default Nav
