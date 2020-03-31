import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../../shared/Layout'

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
    <li key={profile._id}>
      <Link to={`/profiles/${profile._id}`}>{profile.name}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Profiles</h4>
      <ul>
        {profilesList}
      </ul>
    </Layout>
  )
}

export default Profiles
