import React from 'react'
import { Link } from 'react-router-dom'

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

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ProfileForm
