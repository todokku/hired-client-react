import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  background: rgba(255,255,255,.10);
  padding: 50px 0 50px;
  margin: auto;
`

const Footer = () => (
  <Foot>
      &copy; {new Date().getFullYear()} Copyright: <a href="https://www.pantlitz.dev"> Patricia Antlitz </a>
  </Foot>

)

export default Footer
