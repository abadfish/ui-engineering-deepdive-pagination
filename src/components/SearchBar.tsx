import React, { useContext } from 'react'
import { MovieContext } from '../context'

const SearchBar: React.FC = () => {

	const { setSearchTerm, fetchMovies, page, searchTerm } = useContext(MovieContext)

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const queryOmdbApi = () => {
		if (searchTerm) {
			fetchMovies(searchTerm, page)
		}
	}

	return (
		<div>
			<input 
				type='text'
				name='searchTerm'
				onChange={ handleOnChange }
			/>
			<button onClick={ queryOmdbApi }>fetch movies</button>
      
		</div>
	)
}

export default SearchBar
