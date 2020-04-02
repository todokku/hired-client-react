import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import styled, { css } from 'styled-components'
import messages from '../AutoDismissAlert/messages'
import Home from './Home'

const Your = styled.h2`
  text-align: center;
  color: #00235c;
  padding: 20px 0 40px;
`

const Candidate = styled.div`
  display: inline-block;
  vertical-align: top;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(215,215,215,.8);
  height: auto;
  width: 650px;
  margin: 15px 55px;
  padding: 20px 30px;
`

const SideCandidate = styled.div`
  display: inline-block;
  vertical-align: top;
  background: rgba(113,185,255,.4);
  border-radius: 5px;
  height: auto;
  width: 300px;
  margin: 15px 25px;
  padding: 20px;
  text-align: center;
`

const ButtonS = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #edb442;
  background: #edb442;
  color: #00235c;
  padding: 5px 45px;
  margin-top: 20px;
  justifyContent: "center";
  alignItems: "center";
  :hover {
    background: #00235c;
    color: #fff;
    cursor: pointer;
}
  ${props =>
    props.primary &&
    css`
    border: 2px solid #94140a;
    background: #94140a;
    color: #fff;
    padding: 5px 20px;
    :hover {
      background: #e30000;
    }
  `};
`

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
      .then(() => props.msgAlert({ // remove the props param from the .then()
        heading: 'Delete Profile Success',
        message: messages.deleteProfileSuccess,
        variant: 'success'
      }))
      .catch(() => {
        props.msgAlert({
          heading: 'Delete Profile Failed',
          message: messages.deleteFailure,
          variant: 'danger'
        })
      })
  }

  if (!profile) {
    return <Your>Your Profiles</Your>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/profiles' }
    } />
  }

  if (profile.owner === props.user._id) {
    return (
      <div>
        <SideCandidate>
          <h2>{profile.name}</h2>
          <p>Location: {profile.location}</p>
          <p>Contact: {profile.contact}</p>
          <ButtonS primary onClick={destroy}>Delete Profile</ButtonS> {' '}
          <Link to={`/profiles/${props.match.params.id}/edit`}>
            <ButtonS>Edit</ButtonS>
          </Link>
          <Link to="/profiles">Back to all Profiles</Link>
        </SideCandidate>
        <Candidate>
          <h4>{profile.name}</h4>
          <p>Title: {profile.title}</p>
          <p>Education: {profile.education}</p>
          <p>Website: {profile.website}</p>
          <p>Portfolio: {profile.portfolio}</p>
          <p>Other Website: {profile.other}</p>
          <p>Description: {profile.description}</p>
          <p>Salary Requirements: {profile.salary}</p>
        </Candidate>
        <Home />
      </div>
    )
  }
  return (
    <div>
      <Candidate>
        <h4>{profile.name}</h4>
        <p>Title: {profile.title}</p>
        <p>Education: {profile.education}</p>
        <p>Location: {profile.location}</p>
        <p>Contact: {profile.contact}</p>
        <p>Website: {profile.website}</p>
        <p>Portfolio: {profile.portfolio}</p>
        <p>Other Website: {profile.other}</p>
        <p>About Me: {profile.description}</p>
        <p>Salary: {profile.salary}</p>
        <Link to="/profiles">Back to all Profiles</Link>
      </Candidate>
      <Home />
    </div>
  )
}

export default Profile
