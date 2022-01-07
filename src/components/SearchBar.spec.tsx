import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './SearchBar'
import { MovieContext } from '../context'
import { contextProps } from './testContextProps'


describe('Search Bar', () => {
	describe('search bar input field', () => {
		it('sets the value of searchTerm onChange', async () => {
			render (
				<MovieContext.Provider value={ contextProps }>
					<SearchBar />
				</MovieContext.Provider>
			)
			const input = screen.getByTestId('search-input')
			fireEvent.change(input, {target: {value: 'Dogs'}})
			// expect(input.value).toBe('$23')
			expect(contextProps.searchTerm).toBe('Dogs')
		})
	})

})