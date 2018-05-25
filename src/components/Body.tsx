import * as React from "react"
import { MovieList } from "./MovieList"
import { MovieDTO } from "./DTO/MovieDTO"

export class Body extends React.Component<{params: Object, isLoading: boolean, movies: MovieDTO[]}, {}> {
    constructor(props) {
        super(props)

        
    }

    render() {
        return <MovieList params={this.props.params} 
                          isLoading={this.props.isLoading}
                          movies={this.props.movies} />
    }
}