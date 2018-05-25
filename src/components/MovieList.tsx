import * as React from "react"
import { MovieDTO } from "./DTO/MovieDTO"
import { MovieItem } from "./MovieItem"
import { Spinner } from "./Spinner"
import { NoDataMessage } from "./NoDataMessage"
import { Grid } from 'semantic-ui-react'

export class MovieList extends React.Component<{params: Object, isLoading: boolean, movies: MovieDTO[], handleOnClickItem: Function}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        const isLoading = this.props.isLoading

        if (isLoading) {
            return <Spinner />
        } else {
            const movies = this.props.movies.map(movie =>
                <Grid.Column key={movie.id} >
                    <MovieItem movie={movie} handleOnClickItem={this.props.handleOnClickItem} />
                </Grid.Column>
            )

            if (movies.length == 0) {
                return <NoDataMessage />
            } else {
                return <Grid doubling columns={5}>
                    {movies}
                </Grid>
            }
        }
    }
}