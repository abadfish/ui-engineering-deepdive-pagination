import React from 'react'
import styled from 'styled-components'
import { Movie } from '../index.d'

type Props = {
	movie: Movie
}

const MovieCard:React.FC<Props> = ({ movie }) => {
	return (
		<MovieArticle data-testid='movie-card'>
			<img src={`${ movie.Poster }`} alt="movie poster" />
			<div>
				<h2 data-testid='movie-title'>{ movie.Title } - { movie.Year }</h2>
				<p>{ movie.Type }</p>
			
			</div>
			
		</MovieArticle>
	)
}

export default MovieCard

const MovieArticle = styled.article `
	width: 50vw;
	background-color: #f3f3f3;
	padding: 1rem 3rem;
	margin: 1rem 0;
	display: flex;
	// grid-template-columns: 30% 70%;
	border-radius: 4px;
	&:hover {
		-webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2); 
		box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2); 
	}
	img {
		height: 100px;
		width: auto;
	}
	div {
		padding: 0 1.5rem;
	}
`