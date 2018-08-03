export interface StateType {
    movies: MovieType[],
    selectedMovie: MovieType | undefined,
}

export interface MovieType {
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


export interface ParamsType {
    search: string,
    searchBy: EnumSearchBy,
    limit: number,
    sortBy: EnumSortBy,
    sortOrder:EnumSortOrder,
}


export enum EnumSortOrder {
    DESC = 'desc',
    ASC = 'asc'
}

export enum EnumSortBy {
    DATE = 'release_date',
    VOTE = 'vote_average'
}

export enum EnumSearchBy {
    TITLE = 'title',
    GENRES = 'genres'
}
