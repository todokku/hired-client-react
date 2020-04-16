import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Form from 'react-bootstrap/Form'
import Home from '../components/routes/Home'

const Button = styled.button`
  text-align: center;
  border-radius: 33px;
  border: 2px solid #edb442;
  background: #edb442;
  color: #00235c;
  padding: 5px 20px;
  margin: 20px 0 70px;
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
      padding: 5px 35px;
    `};
`

const SpaceDiv = styled.div`
  margin-bottom: 100px;
`

const ProfileForm = ({ profile, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Create a Profile</h3>
      <Form onSubmit={handleSubmit}>
        <SpaceDiv>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your name here"
              value={profile.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Software Engineer"
              value={profile.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your Education information here"
              value={profile.education}
              name="education"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Where are you located?"
              value={profile.location}
              name="location"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="How much are you looking for?"
              value={profile.salary}
              name="salary"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="contact">
            <Form.Label>Contact Information</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              mailto={profile.contact}
              value={profile.contact}
              name="contact"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Webpage (not required)"
              value={profile.website}
              name="website"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="portfolio">
            <Form.Label>Portfolio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. GitHub (not required)"
              value={profile.portfolio}
              name="portfolio"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="other">
            <Form.Label>Other Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. LinkedIn (not required)"
              value={profile.other}
              name="other"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <textarea
              required
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="31"
              maxLength={3000}
              value={profile.description}
              name="description"
              type="text"
              placeholder="About you"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" primary>Submit</Button> {' '}
          <Link to={cancelPath}>
            <Button primary>Cancel</Button>
          </Link>
        </SpaceDiv>
      </Form>
      <Home />
    </div>
  </div>
)

export default ProfileForm
