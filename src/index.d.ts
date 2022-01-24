// types.d.ts

// THIS FILE DOES NOT WORK AS GLOBAL

declare module '*.css' { const url: string; export default url }

export interface Movie {
	imdbID: string
	Title: string
	Poster: string
	Year: string
	Type: string
	// imdbRating: string
	// Plot: string 
	// Genre: string
}

enum ResponseStatus {
	True = 'True',
	False = 'False'
}

type ApiResponse = {
	Search: Movie[],
	totalResults: string,
	Response: ResponseStatus.True
}

type ApiResponseNotFound = {
	Response: ResponseStatus.False,
	Error: string
}

