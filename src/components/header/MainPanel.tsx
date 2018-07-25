import * as React from "react"
import SearchModePanel from "./SearchModePanel"
import ParamsDTO from "../DTO/ParamsDTO"
import { ViewModePanel } from "./ViewModePanel"
import MovieDTO from "../DTO/MovieDTO"

export default class MainPanel extends React.Component<{
    handleInput: Function,
    handleSearch: Function,
    handleChangeSearchBy: Function,
    handleChangeSorting: Function,
    params: ParamsDTO,
    moviesCounter: number,
    selectedMovie?: MovieDTO,
    handleReturnClick: Function,
}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.selectedMovie === undefined) {
            return <SearchModePanel handleInput={this.props.handleInput}
                handleSearch={this.props.handleSearch}
                handleChangeSearchBy={this.props.handleChangeSearchBy}
                params={this.props.params} />
        } else {
            return <ViewModePanel selectedMovie={this.props.selectedMovie}
                handleReturnClick={this.props.handleReturnClick} />
        }
    }
}