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
		<MoviePage>
			<img src={`${ movie?.Poster }`} alt="movie poster" />
			<div>
				<h2>{ movie?.Title } - { movie?.Year }</h2>
				<h3>{ movie?.Genre }</h3>
				<p>{ movie?.Plot }</p>
				<p>IMDB Rating: { movie?.imdbRating }</p>
				<button>Add To Favorites</button>
			</div>
		</MoviePage>
	)
}

export default Movie

const MoviePage = styled.main `
	padding: 4rem 6rem;
	display: flex;
	img {
		height: 250px;
		width: auto;
	}
	div {
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		h2 {
			margin-top: 0;
		}
		button {
			width: 200px;
		}
	}
`
