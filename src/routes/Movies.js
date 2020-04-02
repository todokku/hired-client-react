import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Movies = props => {
  const [movies, setMovies] = useState([])
  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     movies: []
  //   }
  // }

  useEffect(() => {
    axios(`${apiUrl}/movies`)
      .then(res => setMovies(res.data.movies))
      .catch(console.error)
  }, [])

  const moviesList = movies.map(movie => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Movies</h4>
      <ul>
        {moviesList}
      </ul>
    </Layout>
  )
}

export default Movies
