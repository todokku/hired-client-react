import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled from 'styled-components'
import Home from './Home'

const Your = styled.h2`
  text-align: center;
  color: #00235c;
  padding: 20px 0 40px;
`

const Profile = props => {
  const [profile, setProfile] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // Call this callback once after the first render, this only occurs once
  // because our dependency array is empty, so our dependencies never change
  // similar to componentDidMount
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/owned/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      // Make sure to update this.setState to our hooks setMovie function
      .then(res => setProfile(res.data.profile))
      .catch()
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch()
  }

  if (!profile) {
    return <Your>Your Profiles</Your>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/profiles', state: { msg: 'Profile succesfully deleted!' } }
    } />
  }

  return (
    <div>
      <h4>{profile.name}</h4>
      <p>Title: {profile.title}</p>
      <p>Education: {profile.education}</p>
      <p>Location: {profile.location}</p>
      <p>Contact: {profile.contact}</p>
      <p>Website: {profile.website}</p>
      <p>Portfolio: {profile.portfolio}</p>
      <p>Other Website: {profile.other}</p>
      <p>Description: {profile.description}</p>
      <p>Salary Requirements: {profile.salary}</p>
      <button onClick={destroy}>Delete Profile</button>
      <Link to={`/profiles/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/profiles/owned">Back to My Profiles</Link>
      <Home />
    </div>
  )
}

export default Profile
