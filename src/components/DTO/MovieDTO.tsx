export default interface MovieDTO {
    id: number
    tagline: string
    title: string
    poster_path: string
    release_date: Date
    genres: string[]
    vote_average: number
    revenue: number
    runtime: number
    overview: string
    budget: number
}