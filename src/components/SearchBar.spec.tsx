/* eslint-disable no-debugger */
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './SearchBar'
import { MovieContext } from '../context'
import { contextProps } from './testContextProps'


describe('When Search Bar', () => {
	describe('given search bar input field', () => {
		it('sets the value of searchTerm onChange', async () => {
			render (
				<MovieContext.Provider value={ contextProps }>
					<SearchBar />
				</MovieContext.Provider>
			)
			const input = await screen.getByTestId('search-input')
			// console.log(input)
			fireEvent.change(input, {target: {value: 'Dogs'}})
			// expect(input.value).toBe('Dogs')
			// expect(contextProps.searchTerm).toBe('Dogs')
		})
	})

})

// when, given, it(then)