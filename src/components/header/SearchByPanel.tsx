import * as React from "react"
import ParamsDTO from "../DTO/ParamsDTO"
import * as classNames from 'classnames'
import { EnumSearchBy } from '../DTO/Enums/Enums'

export default class SearchByPanel extends React.Component<{ handleChangeSearchBy: Function, handleSearch: Function, params: ParamsDTO }> {
    constructor(props) {
        super(props)

        this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }


    handleChangeSearchBy(event) {
        this.props.handleChangeSearchBy(event)
    }


    handleSearch() {
        this.props.handleSearch()
    }

    render() {
        const searchByGenre = EnumSearchBy.GENRES
        const searchByTitle = EnumSearchBy.TITLE
        var buttonTitleClassNames = classNames({
            'active-button': this.props.params.searchBy == searchByTitle,
            'non-active-button': this.props.params.searchBy != searchByTitle
        })
        var buttonGenreClassNames = classNames({
            'active-button': this.props.params.searchBy == searchByGenre,
            'non-active-button': this.props.params.searchBy != searchByGenre
        })

        return <>
            <p className="text">Search by</p>
            <button className={buttonTitleClassNames} onClick={this.handleChangeSearchBy} value={searchByTitle}>title</ button>
            <button className={buttonGenreClassNames} onClick={this.handleChangeSearchBy} value={searchByGenre}>genres</ button>
            <button className="button float-right active-button" onClick={this.handleSearch}>Search</ button>
        </>
    }
}