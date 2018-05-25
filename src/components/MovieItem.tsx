import * as React from "react"
import { MovieDTO } from "./DTO/MovieDTO"
import { Image, Container } from "semantic-ui-react"
import { GenreItem } from "./GenreItem"
import '../less/styles.less'

export class MovieItem extends React.Component<{ movie: MovieDTO, handleOnClickItem: Function }, {}> {
    constructor(props) {
        super(props)

        this.handleOnClickItem = this.handleOnClickItem.bind(this)
    }

    handleOnClickItem() {
        this.props.handleOnClickItem(this.props.movie)
    }

    render() {
        return <div onClick={this.handleOnClickItem} className="movie-item">
            <Container textAlign='center'>
                <Image src={this.props.movie.poster_path} />
            </Container>
            <Container textAlign='left'>
                {this.props.movie.title}
            </Container>
            <Container textAlign='right'>
                {this.props.movie.release_date}
            </Container>
            <Container textAlign='left'>
                {this.props.movie.genres.map(genre => <GenreItem value={genre}
                    key={genre.toString()} />)}
            </Container>
        </div>
    }
}
