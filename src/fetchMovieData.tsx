import { FullApiResponse, ApiResponseGetMovie } from './types'

const API_KEY = 'b411e086'
// OMDB_API_KEY

// http://www.omdbapi.com/?s=Dogs&apikey=b411e086

export async function getMovies(searchTerm:string, page:number):Promise<FullApiResponse> {
	const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&page=${page}`
	// try {
	const response = await fetch(url)
	console.log(response.status)
	// if (response.status === 200){
	const data = await response.json() as FullApiResponse
	return data
	// } else {
	// return data
	// }
	// } catch(e) {
	// 	return e
	// }
}
// http://www.omdbapi.com/?apikey=b411e086&i=tt0105236

export async function getMovie(imdbID:string):Promise<ApiResponseGetMovie> {
	const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
	const response = await fetch(url)
	const data = await response.json() as ApiResponseGetMovie
	return data
}