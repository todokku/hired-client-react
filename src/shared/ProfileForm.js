import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

const ProfileForm = ({ profile, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      placeholder="Your name here"
      value={profile.name}
      name="name"
      onChange={handleChange}
    />

    <label>Title</label>
    <input
      placeholder="Software Engineer"
      value={profile.title}
      name="title"
      onChange={handleChange}
    />

    <label>Education</label>
    <input
      placeholder="Your Education information here"
      value={profile.education}
      name="education"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="Tell us about you"
      value={profile.description}
      name="description"
      onChange={handleChange}
    />

    <label>Location</label>
    <input
      placeholder="Where are you located?"
      value={profile.location}
      name="location"
      onChange={handleChange}
    />

    <label>Salary</label>
    <input
      placeholder="How much are you looking for?"
      value={profile.salary}
      name="salary"
      onChange={handleChange}
    />

    <Button type="submit" primary>Submit</Button>
    <Link to={cancelPath}>
      <Button primary>Cancel</Button>
    </Link>
  </form>
)

export default ProfileForm