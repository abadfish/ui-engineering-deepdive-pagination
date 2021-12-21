// types.d.ts
declare module '*.css' { const url: string; export default url }

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