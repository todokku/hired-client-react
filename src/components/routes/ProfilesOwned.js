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
  font-size: 20px;
  height: 300px;
  width: 500px;
  margin: 15px 25px;
  padding: 20px;
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
`

const Description = styled.h5`
  text-align: center;
  color: #edb442;
  padding: 10px 0 0;
`
const Paragraph = styled.p`
  text-align: center;
  color: #00235c;
  padding: 5px 0;
`

const ProfilesOwned = props => {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/owned`,
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
          <Title>{profile.title} <Content> {profile.location}</Content> </Title>
        </div>
        <div>
          <Description>Short Description:</Description>
          <Paragraph>{profile.name} is a {profile.title}
           who is current located in {profile.location}...</Paragraph>
        </div>
        <Link to={`/profiles/${profile._id}`} primary>See More</Link>
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

export default ProfilesOwned
