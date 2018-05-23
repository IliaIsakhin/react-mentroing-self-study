import * as React from "react"
import { MovieList } from "./MovieList"

export class Body extends React.Component<{params: Object}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return <MovieList params={this.props.params} />
    }
}