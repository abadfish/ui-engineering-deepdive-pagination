import React, { createContext, useReducer } from 'react'
import { Movie } from './index.d'

const initialState = {
	loading: false,
	// movies: [],
	// searchTerm: '',
	// page: 1
}

interface State {
	loading: boolean,
	movies: Movie[],
	searchTerm: string,
	page: number
}
const MovieContext = createContext(initialState)


// eslint-disable-next-line react/prop-types
const GlobalProvider:React.FC<State>  = ({ children }) => {

	const fetchMovies = (searchTerm:string) => {
		return fetch('')
	}
	const fetchMovie = (movieId:number) => {
		return fetch('')
	}

	const values = {
		loading: false
	}
	
	return (
		<MovieContext.Provider value={ values }>
			{ children }
		</MovieContext.Provider>
	)
}

export default GlobalProvider 
