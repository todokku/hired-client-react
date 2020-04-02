import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Movie = props => {
  const [movie, setMovie] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // Call this callback once after the first render, this only occurs once
  // because our dependency array is empty, so our dependencies never change
  // similar to componentDidMount
  useEffect(() => {
    axios(`${apiUrl}/movies/${props.match.params.id}`)
      // Make sure to update this.setState to our hooks setMovie function
      .then(res => setMovie(res.data.movie))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/movies/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!movie) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Movie succesfully deleted!' } }
    } />
  }

  return (
    <Layout>
      <h4>{movie.title}</h4>
      <p>Date relased: {movie.year}</p>
      <p>Directed by: {movie.director}</p>
      <button onClick={destroy}>Delete Movie</button>
      <Link to={`/movies/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/movies">Back to all movies</Link>
    </Layout>
  )
}

export default Movie
