import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #00235c;
  background: #00235c;
  color: #fff;
  padding: 5px 20px;
  margin: 20px 0 70px 50px;
  justifyContent: "center";
  alignItems: "center";
  :hover {
background: #edb442;
color: #00235c;
cursor: pointer;
}
  ${props =>
    props.primary &&
    css`
      padding: 5px 35px;
    `};

    ${props =>
    props.secondary &&
      css`
        padding: 5px 35px;
        margin: 0 0 0 29.5%;
      `};
`

const Nav = () => (
  <nav>
    <Link to="/profiles/owned">
      <ButtonS secondary type="submit">My Profiles</ButtonS>
    </Link>
    <Link to="/profiles">
      <ButtonS primary type="submit">All Profiles</ButtonS>
    </Link>
    <Link to="/create-profile">
      <ButtonS type="submit">Create a Profile</ButtonS>
    </Link>
    <div>
    </div>
  </nav>
)

// <NavLink to='/'>Home</NavLink>
// <NavLink to='/profiles'>Profiles</NavLink>
// <NavLink to='/create-profile'>Create a Profile</NavLink>

export default Nav
