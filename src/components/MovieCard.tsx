import React from 'react'
import { Movie } from '../index.d'

type Props = {
	movie: Movie
}

const MovieCard:React.FC<Props> = ({ movie }) => {
	return (
		<div>
			{ movie.Title }
		</div>
	)
}

export default MovieCard
