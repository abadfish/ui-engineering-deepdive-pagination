import React, { useContext } from 'react'
import styled from 'styled-components'
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
		<SearchSection>
			<SearchForm>
				<input 
					type='text'
					name='searchTerm'
					onChange={ handleOnChange }
				/>
				<button onClick={ queryOmdbApi }>SEARCH</button>
			</SearchForm>
		</SearchSection>
	)
}

export default SearchBar

const SearchSection = styled.section `
	width: 100%;
	padding: 2rem 0;
	background-color: #f3f3f3;
	display: flex;
	justify-content: center;
	align-items: center;	
`

const SearchForm = styled.form `
	width: 60%;
	display: flex;
	justify-content: center;
	input {
		height: 40px;
		width: 200px;
		border: none;
		box-shadow: inset 0px 0px 3px 0px rgba(0,0,0,0.6);
		border-radius: 3px;
		margin: 0 .5rem;
		padding-left: 5px;
	}
	button {
		width: 100px;
		border: none;
		-webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2); 
		box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2);
		border-radius: 3px;
		margin: 0 .5rem;
		&:hover {
			cursor: pointer;
			-webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2); 
			box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2); 
		}
	}
`