import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getMovie } from '../../fetchMovieData'
import { Movie } from '../../types'
// import { MovieContext } from '../../context'

const MoviePage:React.FC = () => {

	const [movie, setMovie] = useState<Movie>({
		'Title': 'Reservoir Dogs',
		'Year': '1992',
		// 'Genre': 'Crime, Drama, Thriller',
		// 'Plot': 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
		'Poster': 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		// 'imdbRating': '8.3',
		'imdbID': 'tt0105236',
		'Type': 'movie',
	})

	// const { fetchMovie, movie } = useContext(MovieContext)
	// const { imdbID }:{ imdbID:string } = useParams()
	const { imdbID } = useParams()

	useEffect(() => {
		if (imdbID) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const res = getMovie(imdbID)
				.then(res => setMovie(res))
		}
	}, [])


	return (
		<MovieShowPage>
			<img src={`${ movie?.Poster }`} alt="movie poster" />
			<div>
				<TitleBar>
					<h2 data-testid="display-title">{ movie?.Title }</h2>
					<h2> - </h2>
					<h2 data-testid='display-year'>{ movie?.Year }</h2>
				</TitleBar>
			
				{/* <h3>{ movie?.Genre }</h3>
				<p>{ movie?.Plot }</p>
				<p>IMDB Rating: { movie?.imdbRating }</p> */}
				<button>Add To Favorites</button>
			</div>
		</MovieShowPage>
	)
}

export default MoviePage

const MovieShowPage = styled.main `
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

const TitleBar = styled.header `
	display: flex;
`
