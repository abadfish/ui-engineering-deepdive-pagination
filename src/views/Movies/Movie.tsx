import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContext } from '../../context'

const Movie = () => {

	const { fetchMovie, movie } = useContext(MovieContext)
	const { imdbID } = useParams()

	// useEffect(() => {
	// 	fetchMovie(imdbID)
	// }, [])

	console.log(movie)

	return (
		<div>
      
		</div>
	)
}

export default Movie
