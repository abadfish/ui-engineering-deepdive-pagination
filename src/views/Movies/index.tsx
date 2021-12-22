import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Movie } from '../../index.d'
import { MovieContext } from '../../context'
import SearchBar from '../../components/SearchBar'
import MovieCard from '../../components/MovieCard'
import PageButtons from '../../components/PageButtons'

const Movies: React.FC = () => {

	const { page, searchTerm, movies } = useContext(MovieContext)

	const movieList = movies?.map((m:Movie, i) => (
		<NavLink to={ `/movies/${ m.imdbID }` } key={ i }>
			<MovieCard movie={ m } />
		</NavLink>
	))
  
	return (
		<MoviesPage>
			<SearchBar />
			<MovieList>
				{ movies && movies?.length > 0 && <h2>Viewing page { page } of movies that match &quot;{ searchTerm }&quot;</h2> }
				{ movieList }
			</MovieList>
			{ movies && movies?.length > 0 && <PageButtons /> }
		</MoviesPage>
	)
}

export default Movies

const MoviesPage = styled.main `

`
const MovieList = styled.section `
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	a {
		text-decoration: none;
		color: inherit;
	}
`