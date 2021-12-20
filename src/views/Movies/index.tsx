import React, { useState } from 'react'
import { Movie } from '../../index.d'
import PageButtons from '../../components/PageButtons'

const API_KEY = 'b411e086'
// process.env.OMDB_API_KEY
// http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=Lord

const Movies = () => {

	// props will be page number, next page, movies, search term

	const [movies, setMovies] = useState([])
	const [searchParams, setSearchParams] = useState({
		searchTerm: '',
		page: 1
	})

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setSearchParams({ ...searchParams, [name]: value })
	}

	console.log(movies)
	const queryOmdbApi = () => {
		const { searchTerm, page } = searchParams
		fetchMovies (searchTerm, page)

	}

	const fetchMovies = (searchTerm:string, page:number) => {
		// eslint-disable-next-line quotes
		return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`)
			.then(res => res.json())
			.then(res => setMovies(res['Search']))
	}

	const movieList = movies?.map((m:Movie) => (
		<p key={ m.imdbId }>{ m.Title }</p>
	))
  
	return (
		<div>
			<h1>HELLO</h1>
			<input 
				type='text'
				name='searchTerm'
				onChange={ handleOnChange }
			/>
			<button onClick={ queryOmdbApi }>fetch movies</button>
			{ movieList }
			<PageButtons page={ searchParams.page } />
		</div>
	)
}

export default Movies
