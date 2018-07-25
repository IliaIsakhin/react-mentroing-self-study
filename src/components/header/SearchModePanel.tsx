import * as React from "react"
import ParamsDTO from "../DTO/ParamsDTO"
import SearchByPanel from './SearchByPanel'


export default class SearchModePanel extends React.Component<{ handleInput: Function, handleSearch: Function, handleChangeSearchBy: Function, params: ParamsDTO }> {
    constructor(props) {
        super(props)

        this.handleInput = this.handleInput.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch() {
        this.props.handleSearch()
    }

    handleInput(event) {
        this.props.handleInput(event)
    }

    handleChangeSearchBy() {
        this.props.handleChangeSearchBy()
    }

    render() {
        return <div className="search-panel">
            <p className="text">Find your movie</p>
            <input className="search search-box" onKeyUp={this.handleInput} type='text' />
            <SearchByPanel handleChangeSearchBy={this.props.handleChangeSearchBy}
                params={this.props.params}
                handleSearch={this.props.handleSearch} />
        </div>
    }
}