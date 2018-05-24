import * as React from "react"
import { Grid } from 'semantic-ui-react'
import * as classNames from 'classnames'
import { ParamsDTO } from "ParamsDTO";

export class AdditionalPanel extends React.Component<{ moviesCounter: number, handleChangeSorting: Function, params: ParamsDTO }, {}> {
    constructor(props) {
        super(props)

        this.handleChangeSorting = this.handleChangeSorting.bind(this)
    }

    handleChangeSorting(event) {
        this.props.handleChangeSorting(event)
    }

    render() {
        const sortByDate = 'release_date'
        const sortByRating = 'vote_average'
        var buttonTitleClassNames = classNames({
            'active-button': this.props.params.searchBy == sortByDate,
            'non-active-button': this.props.params.searchBy != sortByRating,
            'button': true
        })
        var buttonGenreClassNames = classNames({
            'active-button': this.props.params.searchBy == sortByRating,
            'non-active-button': this.props.params.searchBy != sortByDate,
            'button': true
        })

        return <Grid className="additional-header">
            <Grid.Column>
                {this.props.moviesCounter}
            </Grid.Column>
            <Grid.Column><p className="text">Search by</p></Grid.Column>
            <Grid.Column>
                <button className={buttonTitleClassNames} onClick={this.handleChangeSorting} value={sortByDate}>Release date</ button></Grid.Column>
            <Grid.Column>
                <button className={buttonGenreClassNames} onClick={this.handleChangeSorting} value={sortByRating}>Rating</ button>
            </Grid.Column>
        </Grid>
    }
}