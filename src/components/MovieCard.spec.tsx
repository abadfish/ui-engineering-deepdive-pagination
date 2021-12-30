import React from 'react'
import MovieCard from './MovieCard'
import { Movie } from '../index.d'
import { render, screen } from '@testing-library/react' 
import '@testing-library/jest-dom'

// test('should a card for every movie', () => {
// 	render(<MovieCard />)
//   const input = screen.getByLabelText('Username')
//   // Events and assertions...
// })


// describe('Movie list cards', () => {
test('Renders a movie card with a poster, title, and year', () => {
	const movie:Movie = {
		Title: 'Top Gun',
		Poster: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
		Year: '1986',
		Type: 'movie',
		imdbID: '',
		imdbRating: '',
		Plot: '',
		Genre: ''
	}
	render (
		<MovieCard movie={ movie } />
	)
	// const movieTitle = screen.getByTestId('movie-title')
	expect(screen.getByRole('heading')).toHaveTextContent('Top Gun - 1986')
})
// })