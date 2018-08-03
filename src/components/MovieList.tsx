import * as React from 'react';
import { MovieType } from "../types";
import MovieItem from '../components/MovieItem';

interface Props {
    movies: MovieType[],
    selectedMovie?: MovieType,
    isLoading: boolean,
    onSelectMovie: Function
}

export default function MovieList({ movies, isLoading, onSelectMovie }: Props) {
    if (isLoading) {
        return <>Loading</>
    } else {
        if (!movies) {
            return <> No movies found </>
        } else {
            return <div className='container'>
                {movies.map(movie =>
                    <MovieItem key={movie.id} movie={movie} onClick={onSelectMovie} />
                )}
            </div>
        }
    }
}