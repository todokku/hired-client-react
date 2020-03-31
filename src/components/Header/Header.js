import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled, { css } from 'styled-components'
import logo from './hired.png'
import logoTwo from './Hired-navbar.png'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #00235c;
  background: #00235c;
  color: #fff;
  margin: 100px 40px 70px 330px;
  padding: 8px 60px;
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
      padding: 8px 65px;
    `};
`

const unauthBody = (
  <div>
    <Link to="/sign-up">
      <ButtonS type="submit" href="#sign-up">Sign Up</ButtonS>
    </Link>
    <Link to="sign-in">
      <ButtonS primary type="submit" href="#sign-in">Sign  In</ButtonS>
    </Link>
  </div>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link to="/">Home</Nav.Link>
  </Fragment>
)

const SecondNav = styled.section`
  padding: 160px;
  margin: auto;
  background: rgb(113,185,255);
  background: radial-gradient(circle, rgba(113,185,255,1) 0%, rgba(45,110,187,1) 100%);
`

const Logo = styled.img`
  margin: -50px 645px 50px;
`

const Body = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(215,215,215,1) 100%);
`
const Title = styled.h5`
  margin: 6px;
`

const Header = ({ user }) => (
  <div>
    <Navbar bg="light" variant="light" expand="md">
      <Navbar.Brand href="#">
        <div className="logo">
          <img src={logoTwo} width="25" height="25" alt=""/>
        </div>
      </Navbar.Brand>
      <div>
        <Title>Hired</Title>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <SecondNav>
    </SecondNav>
    <Body className="logo">
      <Logo src={logo} width="100" height="100" />
    </Body>
    { !user ? unauthBody : authenticatedOptions}
  </div>
)

export default Header
