import { FullApiResponse } from './types'

export async function getMovies(searchTerm, page) {
	const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_KEY&page=${page}`
	try {
		const response = await fetch(url)
		console.log(response.status)
		if (response.status === 200){
			const data = await response.json() as FullApiResponse
			return data
		}
	} catch(e) {
		return e
	}

}