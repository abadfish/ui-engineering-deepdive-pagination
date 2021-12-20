import React, { useState, useContext } from 'react'
import { Movie } from '../../index.d'
import { MovieContext } from '../../context'
import SearchBar from '../../components/SearchBar'
import PageButtons from '../../components/PageButtons'

const Movies: React.FC = () => {
	// props will be page number, next page, movies, search term

	const { page, searchTerm, movies } = useContext(MovieContext)

	const movieList = movies?.map((m:Movie) => (
		<p key={ m.imdbID }>{ m.Title }</p>
	))
  
	return (
		<div>
			<h1>Movie App</h1>
			<SearchBar />
			{ movies && movies?.length > 0 && <h2>Viewing page { page } of movies that match &quot;{ searchTerm }&quot;</h2> }
			{ movieList }
			<PageButtons />
		</div>
	)
}

export default Movies
