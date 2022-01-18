import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Movie } from '../../index.d'
import { ResponseStatus } from '../../types'
import { getMovies } from '../../fetchMovieData'
// import { MovieContext } from '../../context'
import SearchBar from '../../components/SearchBar'
import MovieCard from '../../components/MovieCard'
import PageButtons from '../../components/PageButtons'

const Movies: React.FC = () => {

	// const { page, searchTerm, movies } = useContext(MovieContext)
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(1) 
	const [pageTotal, setPageTotal] = useState(1)
	const [searchTerm, setSearchTerm] = useState('Star Wars')
	const [error, setError] = useState('')

	console.log(error)

	const fetchMovies = async () => {
		const moviesRes = await getMovies(searchTerm, page)
		if(moviesRes.Response === ResponseStatus.True ){
			setMovies(moviesRes.Search)
			const pageTotalCalc = Math.ceil(parseInt(moviesRes.totalResults)/10)
			setPageTotal(pageTotalCalc)
		}else{
			setError(moviesRes.Error)
		}
	}

	const movieList = movies?.map((m:Movie, i) => (
		<NavLink to={ `/movies/${ m.imdbID }` } key={ i }>
			<MovieCard movie={ m } />
		</NavLink>
	))
  
	return (
		<MoviesPage>
			<SearchBar 
				fetchMovies={ fetchMovies }
				searchTerm={ searchTerm }
				setSearchTerm={ setSearchTerm }
			/>
			<MovieList>
				{ movies && movies?.length > 0 && <h2>Viewing page { page } of movies that match &quot;{ searchTerm }&quot;</h2> }
				{ movieList }
			</MovieList>
			{ movies && movies?.length > 0 && 
				<PageButtons 
					page={ page }
					setPage={ setPage }
					pageTotal={ pageTotal }
				/> 
			}
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