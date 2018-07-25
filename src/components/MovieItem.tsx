import * as React from "react"
import MovieDTO from "./DTO/MovieDTO"
import { GenreItem } from "./pure/GenreItem"

export default class MovieItem extends React.Component<{ movie: MovieDTO, handleOnClickItem: Function }, {}> {
    constructor(props) {
        super(props)

        this.handleOnClickItem = this.handleOnClickItem.bind(this)
    }

    handleOnClickItem() {
        this.props.handleOnClickItem(this.props.movie)
    }

    render() {
        var movieDate = this.props.movie.release_date
        return <div onClick={this.handleOnClickItem} className="movie-item">
            <img src={this.props.movie.poster_path} className="img" />
            <div>{this.props.movie.title}</div>
            <div>{movieDate.getFullYear()}-{movieDate.getMonth()}-{movieDate.getDay()}</div>
            <div>{this.props.movie.genres.map(genre => <GenreItem value={genre}
                key={genre.toString()} />)}</div>
        </div>
    }
}
