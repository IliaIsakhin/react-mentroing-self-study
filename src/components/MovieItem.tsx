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
        let { release_date, poster_path, title, genres } = this.props.movie

        return <div onClick={this.handleOnClickItem} className="movie-item">
            <img src={poster_path} className="img" />
            <div>{title}</div>
            <div>{release_date.getFullYear()}-{release_date.getMonth()}-{release_date.getDay()}</div>
            <div>{genres.map(genre => <GenreItem value={genre}
                key={genre.toString()} />)}</div>
        </div>
    }
}
