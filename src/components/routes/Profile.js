import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'

const Profile = props => {
  const [profile, setProfile] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // Call this callback once after the first render, this only occurs once
  // because our dependency array is empty, so our dependencies never change
  // similar to componentDidMount
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      // Make sure to update this.setState to our hooks setMovie function
      .then(res => setProfile(res.data.profile))
      .catch(console.error)
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
      .catch(console.error)
  }

  if (!profile) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Profile succesfully deleted!' } }
    } />
  }

  if (profile.owner === props.user._id) {
    return (
      <Layout>
        <h4>{profile.name}</h4>
        <p>Title: {profile.title}</p>
        <p>Education: {profile.education}</p>
        <p>About Me: {profile.description}</p>
        <p>Location: {profile.location}</p>
        <p>Salary: {profile.salary}</p>
        <button onClick={destroy}>Delete Profile</button>
        <Link to={`/profiles/${props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/profiles">Back to all Profiles</Link>
      </Layout>
    )
  }
  return (
    <Layout>
      <h4>{profile.name}</h4>
      <p>Title: {profile.title}</p>
      <p>Education: {profile.education}</p>
      <p>About Me: {profile.description}</p>
      <p>Location: {profile.location}</p>
      <p>Salary: {profile.salary}</p>
      <Link to="/profiles">Back to all Profiles</Link>
    </Layout>
  )
}

export default Profile
