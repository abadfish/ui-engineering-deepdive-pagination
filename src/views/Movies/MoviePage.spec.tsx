import React from 'react'
import 'whatwg-fetch' // needed as fetch is not injected by jest
import '@testing-library/jest-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import MoviePage from './MoviePage'
import { ApiResponseGetMovie } from '../../types'


// Note: because the data fetching is separated from the component we can test is also separately
// In the component itself, we can mock the data fetch function without the need of a stub

const movieResponse: ApiResponseGetMovie = {
	'Title': 'Reservoir Dogs',
	'Year': '1992',
	'Rated': 'R',
	'Released': '02 Sep 1992',
	'Runtime': '99 min',
	'Genre': 'Crime, Drama, Thriller',
	'Director': 'Quentin Tarantino',
	'Writer': 'Quentin Tarantino, Roger Avary',
	'Actors': 'Harvey Keitel, Tim Roth, Michael Madsen',
	'Plot': 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
	'Language': 'English',
	'Country': 'United States',
	'Awards': '12 wins & 23 nominations',
	'Poster': 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
	'Ratings': [
		{
			'Source': 'Internet Movie Database',
			'Value': '8.3/10'
		},
		{
			'Source': 'Rotten Tomatoes',
			'Value': '92%'
		},
		{
			'Source': 'Metacritic',
			'Value': '79/100'
		}
	],
	'Metascore': '79',
	'imdbRating': '8.3',
	'imdbVotes': '975,122',
	'imdbID': 'tt0105236',
	'Type': 'movie',
	'DVD': '18 Mar 2003',
	'BoxOffice': '$2,832,029',
	'Production': 'N/A',
	'Website': 'N/A',
	'Response': 'True'
}


// module mock: we replace the function with a fake implementation
jest.mock('../../fetchMovieData', () => {
	const originalModule = jest.requireActual('../../fetchMovieData')

	return {
		__esModule: true,
		...originalModule,
		getMovie: () => {
			return movieResponse
		},
	}
})


// Stub for the fetch request
// const server = setupServer(
// 	rest.get('http://www.omdbapi.com/*', (req, res, ctx) => {
// 		console.log(req)
// 		return res(ctx.json(movieResponse))
// 	}),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe('Can fetch movie correctly', () => {
	test('loads and displays movie page', async () => {
		render( <MoviePage /> )

		// ASSERT:
		// const movieYear = await screen.findByText('1992') 
		const movieYear = await waitFor(() => screen.getByText('1992'))
		expect(movieYear).toBeVisible()
		expect(screen.getByTestId('display-title')).toHaveTextContent('Reservoir Dogs')
		// expect(screen.getByTestId('display-year')).toHaveTextContent('1992')
	})
})

