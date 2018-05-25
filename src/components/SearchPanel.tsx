import * as React from "react"
import '../less/styles.less'
import { ParamsDTO } from "./DTO/ParamsDTO"
import { SearchByPanel } from './SearchByPanel'

export class SearchPanel extends React.Component<{ handleInput: Function, handleSearch: Function, handleChangeSearchBy: Function, params: ParamsDTO }> {
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
            <button className="search search-button" onClick={this.handleSearch}>-></ button>
            <SearchByPanel handleChangeSearchBy={this.props.handleChangeSearchBy} params={this.props.params} />
        </div>
    }
}