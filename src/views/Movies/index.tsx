import React, { useState } from 'react'

const API_KEY = 'b411e086'
// process.env.OMDB_API_KEY
// http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=Lord

const Movies = () => {

	// props will be page number, next page, movies, search term

	const [movies, setMovies] = useState({})
	console.log(movies)

	const queryOmdbApi = () => {
		// eslint-disable-next-line quotes
		return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=gold&page=5`)
			.then(res => res.json())
			.then(res => setMovies(res))
	}
  
	return (
		<div>
			<h1>HELLO</h1>
			<button onClick={ queryOmdbApi }>fetch movies</button>
		</div>
	)
}

export default Movies
