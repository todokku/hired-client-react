import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import MovieForm from '../shared/MovieForm'
import Layout from '../shared/Layout'

const MovieEdit = props => {
  const [movie, setMovie] = useState({ title: '', director: '', year: '' })
  const [updated, setUpdate] = useState(false)
  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     movie: {
  //       title: '',
  //       director: '',
  //       year: ''
  //     },
  //     updated: false
  //   }
  // }

  useEffect(() => {
    axios(`${apiUrl}/movies/${props.match.params.id}`)
      .then(res => setMovie(res.data.movie))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    const upgradedField = { [event.target.name]: event.target.value }
    // //
    const editedMovie = Object.assign({ ...movie }, upgradedField)
    setMovie(editedMovie)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/movies/${props.match.params.id}`,
      method: 'PATCH',
      data: { movie }
    })
      .then(() => setUpdate(true))
      .catch(console.error)
  }
  //
  // const { movie, updated } = this.state
  // const { handleChange, handleSubmit } = this
  if (updated) {
    return <Redirect to={`/movies/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <MovieForm
        movie={movie}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/movies/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default MovieEdit
