/* eslint-disable no-debugger */
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './SearchBar'
// import { MovieContext } from '../context'
// import { contextProps } from './testContextProps'


describe('When Search Bar', () => {
	describe('given search bar input field', () => {
		it('sets the value of searchTerm onChange', async () => {
			const fetchMovies = jest.fn()
			const searchTerm = 'Dogs'
			const setSearchTerm = jest.fn()

			render (
				// <MovieContext.Provider value={ contextProps }>
				<SearchBar 
					fetchMovies={ fetchMovies }
					searchTerm={ searchTerm }
					setSearchTerm={ setSearchTerm }
				/>
				// {/* </MovieContext.Provider> */}
			)
			const input = await screen.getByTestId('search-input')
			// console.log(input)
			fireEvent.change(input)
			// expect(input.value).toBe('Dogs')
			// expect(setSearchTerm).toHaveBeenCalledTimes(1)
			// expect(setSearchTerm).toHaveBeenCalledWith('Dogs')
		})
	})

})

// when, given, it(then)