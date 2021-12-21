import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MovieContext } from '../../context'

const Movie = () => {

	const { fetchMovie, movie } = useContext(MovieContext)
	const { imdbID } = useParams()

	useEffect(() => {
		if (imdbID) {
			fetchMovie(imdbID)
		}
	}, [])

	console.log(movie)

	return (
		<div>
			<img src={`${ movie?.Poster }`} alt="movie poster" />
			<h2>{ movie?.Title } - { movie?.Year }</h2>
			<h3>{ movie?.Genre }</h3>
			<p>{ movie?.Plot }</p>
			<p>{ movie?.imdbRating }</p>
			<button>Add To Favorites</button>
		</div>
	)
}

export default Movie
