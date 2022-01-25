import nock from 'nock'
import 'whatwg-fetch' 
import { getMovies } from './fetchMovieData'
import { FullApiResponse, ResponseStatus } from './types'


describe('Can fetch movies correctly', () => {
	test('Can fetch movies when a search term and page are provided', async () => {
		const searchTerm = 'Dogs', page = 1
		
		const moviesResponse: FullApiResponse = {
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
		nock('http://test_url.com')
			.get('/')
			.reply(200, moviesResponse, {
				'Content-Type': 'application/json',
			})
		const result = await getMovies(searchTerm, page)
		console.log(moviesResponse)
		expect(result).toContain(moviesResponse.Search[0])
	})

})