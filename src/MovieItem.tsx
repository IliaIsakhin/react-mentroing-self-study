import { Genre } from "Genre";

export interface MovieItem {
    id: number
    tagline: string
    title: string
    imageURL: string
    releaseDate: Date
    genres: [Genre]
    rating: number
    budget: number
    runtime: number
    description: string
}