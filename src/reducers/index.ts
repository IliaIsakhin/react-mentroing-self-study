import { combineReducers } from 'redux'
import { StateType, MovieType } from '../types'
import { SelectMovieAction, GetMoviesAction, SELECT_MOVIE, GET_MOVIES } from '../actions'
var serverResponse = require('../../server-response.json')

function selectedMovie(state: any = {}, action: SelectMovieAction): MovieType | undefined {
    switch (action.type) {
        case SELECT_MOVIE:
            return findMovieById(state.movies, action.id)
        default:
            return state
    }
}

function movies(state: any = [], action: GetMoviesAction): MovieType[] {
    switch (action.type) {
        case GET_MOVIES:
            return getMovies()
        default:
            return state
    }
}

function findMovieById(movies: MovieType[], id: number): MovieType | undefined {
    return movies.find(movie => movie.id === id)
}

function getMovies(): MovieType[] {
    var movies: MovieType[] = serverResponse.data;
    return movies.map(a => {
            a.release_date = new Date(a.release_date)
            return a
        })
}

const rootReducer = combineReducers({ selectedMovie, movies })

export default rootReducer