/* eslint-disable @typescript-eslint/no-empty-function */
// ^^^ how can I put this in lintrc ?

import React, { createContext, useReducer, useEffect } from 'react'
import { Movie } from './index.d'

const API_KEY = 'b411e086'
// process.env.OMDB_API_KEY
// http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=Lord


enum ActionType {
  MAKING_API_REQUEST = 'MAKING_API_REQUEST',
  SUCCESSFUL_MOVIES_FETCH = 'SUCCESSFUL_MOVIES_FETCH',
  FAILED_API_REQUEST = 'FAILED_API_REQUEST',
  SUCCESSFUL_MOVIE_FETCH = 'SUCCESSFUL_MOVIE_FETCH',
	INCREMENT_PAGE = 'INCREMENT_PAGE',
	DECREMENT_PAGE = 'DECREMENT_PAGE',
	SET_SEARCH_TERM = 'SET_SEARCH_TERM',
	SET_PAGE_NUM = 'SET_PAGE_NUM'
}

interface Action {
	type: ActionType,
  payload: any | null
}

interface State {
	loading: boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errors?: any
	movies?: Movie[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	movie?: Movie | null
	searchTerm: string
	page: number
	movieCount: number
	fetchMovies: (searchTerm:string, page:number) => Promise<void>
	fetchMovie: (imdbID:string) => Promise<void>
	incrementPage: () => void
	decrementPage: () => void
	setSearchTerm: (term:string) => void
	setPageNum: (pageNum:number) => void
}

const initialState:State = {
	loading: false,
	errors: {},
	movies: [],
	movie: null,
	searchTerm: '',
	page: 1,
	movieCount: 0,
	fetchMovies: (searchTerm: string, page:number) => new Promise((resolve, reject) => {}),
	fetchMovie: (imdbID:string) => new Promise((resolve, reject) => {}),
	incrementPage: () => {},
	decrementPage: () => {},
	setSearchTerm: (term:string) => {},
	setPageNum: (pageNum:number) => {}
}

export const MovieContext = createContext(initialState)

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
			movie: null,
			movieCount: 0
		}
	case ActionType.SUCCESSFUL_MOVIES_FETCH:
		console.log(action.payload)
		return { 
			...state,
			loading: false,
			errors: {},
			movies: action.payload['Search'],
			movieCount: action.payload['totalResults']
		}
	case ActionType.SUCCESSFUL_MOVIE_FETCH:
		return { 
			...state,
			loading: false,
			errors: {},
			movie: action.payload 
		}
	case ActionType.INCREMENT_PAGE:
		return { 
			...state,
			page: state.page + 1
		}
	case ActionType.DECREMENT_PAGE:
		return { 
			...state,
			page: state.page - 1
		}
	case ActionType.SET_SEARCH_TERM:
		return { 
			...state,
			searchTerm: action.payload
		}
	case ActionType.SET_PAGE_NUM:
		return { 
			...state,
			page: action.payload
		}
	default:
		return state
	}
} 


const MovieProvider: React.FC  = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		if (state.movies) {
			fetchMovies(state.searchTerm, state.page)
		}
	}, [state.page])

	const fetchMovies = (searchTerm:string, page:number) => {
		return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`)
			.then(res => res.json())
			.then(res => dispatch({ type: ActionType.SUCCESSFUL_MOVIES_FETCH, payload: res }))
	}

	const fetchMovie = (imdbID:string) => {
		return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
			.then(res => res.json())
			.then(res => dispatch({ type: ActionType.SUCCESSFUL_MOVIE_FETCH, payload: res }))
	}

	const decrementPage = () => {
		dispatch({ type: ActionType.DECREMENT_PAGE, payload: null })
	}

	const incrementPage = () => {
		dispatch({ type: ActionType.INCREMENT_PAGE, payload: null })
	}

	const setSearchTerm = (term:string) => {
		dispatch({ type: ActionType.SET_SEARCH_TERM, payload: term })
	}

	const setPageNum = (pageNum:number) => {
		dispatch({ type: ActionType.SET_PAGE_NUM, payload: pageNum })
	}

	const values = {
		loading: state.loading,
		errors: state.errors,
		movies: state.movies,
		searchTerm: state.searchTerm,
		page: state.page,
		movie: state.movie,
		movieCount: state.movieCount,
		fetchMovies,
		fetchMovie,
		incrementPage,
		decrementPage,
		setSearchTerm,
		setPageNum
	}
	
	return (
		<MovieContext.Provider value={ values }>
			{ children }
		</MovieContext.Provider>
	)
}

export default MovieProvider 
