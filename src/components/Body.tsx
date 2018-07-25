import * as React from "react"
import { MovieList } from "./MovieList"
import MovieDTO from "./DTO/MovieDTO"

export default class Body extends React.Component<{
    params: Object, isLoading: boolean, movies: MovieDTO[], handleOnClickItem: Function
}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        let { params, isLoading, movies, handleOnClickItem } = this.props

        return <MovieList params={params}
            isLoading={isLoading}
            movies={movies}
            handleOnClickItem={handleOnClickItem} />
    }
}