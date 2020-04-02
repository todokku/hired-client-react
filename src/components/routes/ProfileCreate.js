import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ProfileForm from '../../shared/ProfileForm'

const ProfileCreate = props => {
  const [profile, setProfile] = useState(
    { name: '',
      title: '',
      education: '',
      description: '',
      location: '',
      salary: '',
      contact: '',
      website: '',
      portfolio: '',
      other: ''
    })
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
      .catch()
  }

  if (createdProfileId) {
    return <Redirect to={`/profiles/${createdProfileId}`} />
  }

  return (
    <div>
      <ProfileForm
        profile={profile}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </div>
  )
}

export default ProfileCreate
