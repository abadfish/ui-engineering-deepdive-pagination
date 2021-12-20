// types.d.ts
declare module '*.css' { const url: string; export default url }

export interface Movie {
	title: string
	thumbnailUrl: string
	year: number
	genre: string
}