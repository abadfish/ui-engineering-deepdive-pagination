/* eslint-disable @typescript-eslint/no-empty-function */
// ^^^ how can I put this in lintrc ?

import React, { createContext, useReducer } from 'react'
import { Movie } from './index.d'

enum ActionType {
  MAKING_API_REQUEST = 'MAKING_API_REQUEST',
  SUCCESSFUL_MOVIES_FETCH = 'SUCCESSFUL_MOVIES_FETCH',
  FAILED_API_REQUEST = 'FAILED_API_REQUEST',
  SUCCESSFUL_MOVIE_FETCH = 'SUCCESSFUL_MOVIE_FETCH'
}

interface Action {
	type: ActionType,
  payload: any | null
}

interface State {
	loading: boolean,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errors?:any,
	movies?: Movie[],
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	movie?: any,
	searchTerm: string,
	page: number | null,
	fetchMovies: (searchTerm:string, page:number) => Promise<Response>
	fetchMovie: (imdbId:string) => Promise<Response>
}

const initialState:State = {
	loading: false,
	errors: {},
	movies: [],
	movie: {},
	searchTerm: '',
	page: 1,
	fetchMovies: () => new Promise((resolve, reject) => {}),
	fetchMovie: (imdbId:string) => new Promise((resolve, reject) => {}),

}

const MovieContext = createContext(initialState)

const reducer:React.Reducer<State, Action> = (state, action) => {
	switch(action.type) {
	case ActionType.MAKING_API_REQUEST:
		return { 
			...state,
			loading: true,
			errors: {}
		}
	case ActionType.FAILED_API_REQUEST:
		return { 
			...state,
			loading: false,
			errors: action.payload,
			movies: [],
			movie: {},
		}
	case ActionType.SUCCESSFUL_MOVIES_FETCH:
		return { 
			...state,
			loading: false,
			errors: {},
			movies: action.payload,
		}
	case ActionType.SUCCESSFUL_MOVIE_FETCH:
		return { 
			...state,
			loading: false,
			errors: {},
			movie: action.payload 
		}
	default:
		return state
	}
} 


// eslint-disable-next-line react/prop-types
const GlobalProvider:React.FC  = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchMovies = (searchTerm:string) => {
		return fetch('')
	}
	const fetchMovie = (imdbId:string) => {
		return fetch('')
	}

	const values = {
		loading: state.loading,
		errors: state.errors,
		movies: state.movies,
		searchTerm: state.searchTerm,
		page: state.page,
		movie: state.movie,
		fetchMovies,
		fetchMovie,
	}
	
	return (
		<MovieContext.Provider value={ values }>
			{ children }
		</MovieContext.Provider>
	)
}

export default GlobalProvider 
