export const contextProps = {
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
