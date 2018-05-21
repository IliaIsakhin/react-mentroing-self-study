import * as React from "react"
import { MovieDTO } from "./MovieDTO"
import { MovieItem } from "./MovieItem"
import { getMovies } from "./MovieService"
import { Spinner } from "./Spinner"
import { Grid } from 'semantic-ui-react'

export class MovieList extends React.Component<{}, { movies: MovieDTO[], isLoading: boolean }> {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            isLoading: true,
            movies: []
        })

        getMovies().then(result => {
            if (result) {
                this.setState({
                    isLoading: false,
                    movies: result
                })
            }
        })
    }

    render() {
        const isLoading = this.state.isLoading

        if (isLoading) {
            return <Spinner />
        } else {
            const movies = this.state.movies.map(movie =>
                <Grid.Column key={movie.id} >
                    <MovieItem movie={movie} />
                </Grid.Column>
            )

            return <Grid doubling columns={5}>
                {movies}
            </Grid>
        }
    }
}