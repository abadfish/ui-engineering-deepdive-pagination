// types.d.ts
declare module '*.css' { const url: string; export default url }

export interface Movie {
	imdbID: string
	Title: string
	Poster: string
	Year: number
	Type: string
}