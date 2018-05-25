import * as React from "react"
import * as classNames from 'classnames'
import { ParamsDTO } from "./DTO/ParamsDTO"
import { EnumSortBy } from './DTO/Enums/ParameterEnums'

export class AdditionalPanel extends React.Component<{ moviesCounter: number, handleChangeSorting: Function, params: ParamsDTO }, {}> {
    constructor(props) {
        super(props)

        this.handleChangeSorting = this.handleChangeSorting.bind(this)
    }

    handleChangeSorting(event) {
        this.props.handleChangeSorting(event)
    }

    render() {
        const sortByDate = EnumSortBy.DATE
        const sortByRating = EnumSortBy.VOTE
        var buttonTitleClassNames = classNames({
            'active-button': this.props.params.sortBy == sortByDate,
            'non-active-button': this.props.params.sortBy == sortByRating,
            'button': true,
            'float-right': true
        })
        var buttonGenreClassNames = classNames({
            'active-button': this.props.params.sortBy == sortByRating,
            'non-active-button': this.props.params.sortBy == sortByDate,
            'button': true,
            'float-right': true
        })

        return <div className="additional-header">
            <span>{this.props.moviesCounter} movies found</span>
           
            <button className={buttonGenreClassNames} onClick={this.handleChangeSorting} value={sortByRating}>Rating</ button>
            <button className={buttonTitleClassNames} onClick={this.handleChangeSorting} value={sortByDate}>Release date</ button>
            <span className='float-right'>Sort by</span>
        </div>
    }
}