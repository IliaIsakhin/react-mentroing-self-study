import * as React from 'react'
import { MovieType } from "../types"

interface Props {
    movie: MovieType,
    onClick: Function
}

const MovieItem = ({movie, onClick}: Props) => {
    return <div onClick={() => onClick(movie.id)} className="movie-item"> 
            <img src={movie.poster_path} className="img" /> 
            <div>{movie.title}</div> 
            <div>{movie.release_date.getFullYear()}-{movie.release_date.getMonth()}-{movie.release_date.getDay()}</div> 
            <div>{movie.genres.map(genre => <span key={genre.toString()}>{genre}</span>)}</div> 
        </div> 
}

export default MovieItem