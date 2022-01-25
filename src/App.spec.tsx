/* eslint-disable no-debugger */
import React from 'react'
import 'whatwg-fetch' // needed as fetch is not injected by jest
import '@testing-library/jest-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import Movies from './views/Movies'
import MoviePage from './views/Movies/MoviePage'
import { ApiResponse, ApiResponseGetMovie, ResponseStatus } from './types'

const moviesResponse: ApiResponse = {
	Search: [{
		'Title': 'Reservoir Dogs',
		'Year': '1992',
		'imdbID': 'tt0105236',
		'Type': 'movie',
		'Poster': 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
	}],
	totalResults: '966',
	Response: ResponseStatus.True
}


// Stub for the fetch request
const server = setupServer(
	rest.get('http://www.omdbapi.com/*', (req, res, ctx) => {
		return res(ctx.json(moviesResponse))
	}),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Can fetch movie correctly', () => {
	test('loads and displays movie page', async () => {
		render(
			<Router>
				<Routes>
					<Route path='/' element={ <Movies /> } />
					<Route path='movies/:imdbID' element={ <MoviePage /> } />
				</Routes>
			</Router>)

		// ASSERT:
		const moviesIndexFirstCard = await waitFor(() => screen.getByText('Reservoir Dogs - 1992'))
		expect(moviesIndexFirstCard).toBeVisible()
	})
})

