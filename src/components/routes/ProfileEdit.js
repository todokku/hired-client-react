import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ProfileForm from '../../shared/ProfileForm'
import Layout from '../../shared/Layout'

const ProfileEdit = props => {
  const [profile, setProfile] = useState({ name: '', title: '', education: '', description: '', location: '', salary: '' })
  const [updated, setUpdate] = useState(false)

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
      .catch()
  }, [])

  const handleChange = event => {
    const upgradedField = { [event.target.name]: event.target.value }
    // //
    const editedProfile = Object.assign({ ...profile }, upgradedField)
    setProfile(editedProfile)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: { profile }
    })
      .then(() => setUpdate(true))
      .catch()
  }
  //
  // const { movie, updated } = this.state
  // const { handleChange, handleSubmit } = this
  if (updated) {
    return <Redirect to={`/profiles/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <ProfileForm
        profile={profile}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/profiles/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default ProfileEdit
