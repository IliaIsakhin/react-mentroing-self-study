import * as React from "react"
import { SearchPanel } from "./SearchPanel"

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <a>FIND YOUR MOVIE</a>
            <SearchPanel />
        </div>
    }
}