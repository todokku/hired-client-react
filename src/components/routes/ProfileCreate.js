import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ProfileForm from '../../shared/ProfileForm'
import Layout from '../../shared/Layout'

const ProfileCreate = props => {
  const [profile, setProfile] = useState({ name: '', title: '', education: '', description: '', location: '', salary: '' })
  const [createdProfileId, setCreatedProfileId] = useState(null)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedProfile = Object.assign({ ...profile }, updatedField)
    setProfile(editedProfile)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/profiles`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: { profile }
    })
      .then(res => setCreatedProfileId(res.data.profile._id))
      .catch(console.error)
  }

  if (createdProfileId) {
    return <Redirect to={`/profiles/${createdProfileId}`} />
  }

  return (
    <Layout>
      <ProfileForm
        profile={profile}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}

export default ProfileCreate
