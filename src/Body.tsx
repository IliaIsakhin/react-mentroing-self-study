import * as React from "react"
import { MovieList } from "./MovieList"

export class Body extends React.Component<{}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return <MovieList />
    }
}