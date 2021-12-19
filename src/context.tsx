import React, { createContext } from 'react'

const initialState = {
	loading: false 
}
const MovieContext = createContext(initialState)


// eslint-disable-next-line react/prop-types
const GlobalProvider  = ({ children }) => {

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
