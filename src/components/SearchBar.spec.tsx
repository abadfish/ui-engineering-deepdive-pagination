/* eslint-disable no-debugger */
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './SearchBar'

describe('When Search Bar', () => {
	describe('given search bar input field', () => {
		it('sets the value of searchTerm onChange', async () => {
			const fetchMovies = jest.fn()
			const searchTerm = 'Dogs'
			const setSearchTerm = jest.fn()

			render (
				<SearchBar 
					fetchMovies={ fetchMovies }
					searchTerm={ searchTerm }
					setSearchTerm={ setSearchTerm }
				/>
			)
			const input = await screen.getByTestId('search-input')
			fireEvent.change(input, {
				target: { value: 'Dogs'}
			})
			expect(setSearchTerm).toHaveBeenCalledTimes(1)
			expect(setSearchTerm).toHaveBeenCalledWith('Dogs')
			expect(searchTerm).toEqual('Dogs')
		})
	})

})

// when, given, it(then)