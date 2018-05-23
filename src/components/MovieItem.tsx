import * as React from "react"
import { MovieDTO } from "./MovieDTO"
import { Image, Container } from "semantic-ui-react"
import { GenreItem } from "./GenreItem"
import '../less/styles.less'

interface MovieItemProps {
    movie: MovieDTO
}

export const MovieItem: React.SFC<MovieItemProps> = (props) => {
    return <div className="movie-item">
        <Container textAlign='center'>
            <Image src={props.movie.poster_path} />
        </Container>
        <Container textAlign='left'>
            {props.movie.title}
        </Container>
        <Container textAlign='right'>
            {props.movie.release_date}
        </Container>
        <Container textAlign='left'>
            {props.movie.genres.map(genre => <GenreItem value={genre}
                key={genre.toString()} />)}
        </Container>
    </div>
}
