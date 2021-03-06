import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import Home from './Home'

const Inline = styled.div`
    display: inline-block;
    vertical-align: top;
`

const Candidates = styled.div`
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(215,215,215,.8);
  height: 300px;
  width: 500px;
  margin: 15px 25px;
  padding: 20px 30px;
  text-align: right;

  @media (max-width: 1024px) {
     width: 430px;
     margin: 15px 15px;
}

  @media (max-width: 768px) {
    width: 700px;
    margin: 15px 0;
}
  @media (max-width: 425px) {
    height: 100%;
    width: 400px;
    margin: 10px 0;
}
 @media (max-width: 375px) {
   height: 100%;
   width: 100%;
   margin: 10px 0;
}
`

const Name = styled.h2`
  text-align: center;
  color: #00235c;
`

const Title = styled.p`
  color: #edb442;
  text-align: center;
  font-size: 18px;
  font-style: italic;
`
const Content = styled.h6`
  color: #00235c;
  text-align: center;
`

const Description = styled.h5`
  text-align: center;
  color: #d1941b;
  padding: 10px 0 0;
`
const Paragraph = styled.p`
  text-align: center;
  color: #00235c;
  padding: 5px 0;
`

const Profiles = props => {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => setProfiles(res.data.profiles))
      .catch()
  }, [])

  const profilesList = profiles.map(profile => (
    <Inline key={profile._id}>
      <Candidates>
        <div>
          <Name>{profile.name}</Name>
        </div>
        <div>
          <Title>{profile.title}</Title><Content>{profile.location}</Content>
        </div>
        <Description>
          <div>
            <Description>Short Description:</Description>
            <Paragraph>{profile.name} is a {profile.title} who is current located in {profile.location}...</Paragraph>
          </div>
        </Description>
        <Link to={`/profiles/${profile._id}`}>See More</Link>
      </Candidates>
    </Inline>
  ))

  return (
    <Fragment>
      {profilesList}
      <Home />
    </Fragment>
  )
}

export default Profiles
