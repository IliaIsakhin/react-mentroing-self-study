import * as React from "react"
import '../less/styles.less'
import { ParamsDTO } from "ParamsDTO"
import * as classNames from 'classnames'

export class SearchByPanel extends React.Component<{ handleChangeSearchBy: Function, params: ParamsDTO }> {
    constructor(props) {
        super(props)

        this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this)
    }

    handleChangeSearchBy(event) {
        this.props.handleChangeSearchBy(event)
    }

    render() {
        const searchByGenre = 'genres'
        const searchByTitle = 'title'
        var buttonTitleClassNames = classNames({ 'active-button': this.props.params.searchBy == searchByTitle, 
                                                 'non-active-button': this.props.params.searchBy != searchByTitle , 
                                                 'button': true})
        var buttonGenreClassNames = classNames({ 'active-button': this.props.params.searchBy == searchByGenre, 
                                                 'non-active-button': this.props.params.searchBy != searchByGenre , 
                                                 'button': true})

        return <div>
            <p className="text">Search by</p>
            <button className={buttonTitleClassNames} onClick={this.handleChangeSearchBy} value={searchByTitle}>title</ button>
            <button className={buttonGenreClassNames} onClick={this.handleChangeSearchBy} value={searchByGenre}>genres</ button>
        </div>
    }
}