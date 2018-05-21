import * as React from "react"
import { MovieDTO } from "./MovieDTO"
import { Image, Container } from "semantic-ui-react"
import { GenreItem } from "./GenreItem"


export class MovieItem extends React.Component<{ movie: MovieDTO }, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        const movie = this.props.movie

        return <div>
            <Container textAlign='center'>
                <Image src={movie.poster_path} />
            </Container>
            <Container textAlign='left'>
                {movie.title}
            </Container>
            <Container textAlign='right'>
                {movie.release_date}
            </Container>
            <Container textAlign='left'>
                {movie.genres.map(genre => <GenreItem value={genre} />)}
            </Container>
        </div>
    }
}