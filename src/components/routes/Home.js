import React from 'react'
import Footer from '../../shared/Footer'
import styled from 'styled-components'

const Foot = styled.div`
  background: rgba(255,255,255,.8);
`

const Home = () => (
  <Foot>
    <Footer/>
  </Foot>
)

export default Home
