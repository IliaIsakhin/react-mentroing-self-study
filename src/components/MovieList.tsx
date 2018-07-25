import * as React from "react"
import MovieDTO from "./DTO/MovieDTO"
import MovieItem from "./MovieItem"
import { NoDataMessage } from "./pure/NoDataMessage"

export class MovieList extends React.Component<{ params: Object, isLoading: boolean, movies: MovieDTO[], handleOnClickItem: Function }, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        const isLoading = this.props.isLoading

        if (isLoading) {
            return <>Loading</>
        } else {
            const movies = this.props.movies.map(movie =>
                <MovieItem key={movie.id} movie={movie} handleOnClickItem={this.props.handleOnClickItem} />
            )

            if (movies.length == 0) {
                return <NoDataMessage />
            } else {
                return <div className='container'>
                    {movies}
                </div>
            }
        }
    }
}