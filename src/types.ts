
export interface Movie {
	imdbID: string
	Title: string
	Poster: string
	Year: string
	Type: string
	imdbRating: string
	Plot: string 
	Genre: string
}

export enum ResponseStatus {
	True = 'True',
	False = 'False'
}

export type ApiResponse = {
	Search: Movie[],
	totalResults: string,
	Response: ResponseStatus.True
}

type ApiResponseNotFound = {
	Response: ResponseStatus.False,
	Error: string
}

export type FullApiResponse = ApiResponse | ApiResponseNotFound

export type MovieRating = {
	Source: string,
	Value: string
}

export type ApiResponseGetMovie = {
	Title: string,
	Year: string,
	Rated: string,
	Released: string,
	Runtime: string,
	Genre: string,
	Director: string,
	Writer: string,
	Actors: string,
	Plot: string,
	Language: string,
	Country: string,
	Awards: string,
	Poster: string,
	Ratings: MovieRating[],
	Metascore: string,
	imdbRating: string,
	imdbVotes: string,
	imdbID: string,
	Type: string,
	DVD: string,
	BoxOffice: string,
	Production: string,
	Website: string,
	Response: string
}
