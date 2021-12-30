// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PageButtons from './PageButtons'
import { MovieContext } from '../context'

test('loads and displays greeting', async () => {

	// Arrange
	const contextValues = {
		setPageNum: jest.fn(), // spy
		page: 2, // mock
		movieCount: 100,
		loading: false,
		errors: {},
		movies: [],
		movie: null,
		searchTerm: '',
		fetchMovies: jest.fn(),
		fetchMovie: jest.fn(),
		incrementPage: jest.fn(),
		decrementPage: jest.fn(),
		setSearchTerm: jest.fn(),
	}
	render(
		<MovieContext.Provider value={ contextValues }>
			<PageButtons />
		</MovieContext.Provider>
	)

	// ACT
	fireEvent.click(screen.getByTestId('btn-first'))

	// ASSERT:
	expect(contextValues.setPageNum).toHaveBeenCalledTimes(1)
	expect(contextValues.setPageNum).toHaveBeenCalledWith(1)

	// Extend this test and test the full functionality

})