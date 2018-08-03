import constructURL from '../utils/utils'
var serverResponse = require('../../server-response.json')
import fetch from 'cross-fetch'
import { MovieType } from '../types';

const SERVICE_URL = '//react-cdp-api.herokuapp.com/movies'
export const SELECT_MOVIE = 'SELECT_MOVIE'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECIEVE_MOVIES = 'RECIEVE_MOVIES'
export const GET_MOVIES = 'GET_MOVIES'

export type SELECT_MOVIE = typeof SELECT_MOVIE

export interface RequestMoviesAction {
    type: String,
    params,
    isLoading
}

export interface RecieveMoviesAction {
    type: String,
    movies,
    isLoading
}

export interface SelectMovieAction {
    type: String
    id,
}

export interface GetMoviesAction {
    type: String
}

export function selectMovieActionCreator(id): SelectMovieAction {
    return {
        type: SELECT_MOVIE,
        id
    }
}

export function getMoviesAcionCreator(): GetMoviesAction {
    return {
        type: GET_MOVIES
    }
}

// export function requestMoviesActionCreator(params): RequestMoviesAction {
//     return {
//         type: RequestMovies,
//         isLoading: true,
//         params
//     }
// }

// export function recieveMoviesActionCreator(movies): RecieveMoviesAction {
//     return {
//         type: RecieveMovies,
//         movies: movies.data.children.map(child => child.data),
//         isLoading: false,
//     }
// }

// export function fetchMovies(params) {
//     return function (dispatch) {
//         dispatch(requestMoviesActionCreator(params))
        
//         return fetch(constructURL(SERVICE_URL, params))
//             .then((response) => response.json(), () => serverResponse)
//             .then(movies => dispatch(recieveMoviesActionCreator(movies)))
//     }
// }