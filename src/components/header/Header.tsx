import * as React from 'react'
import ParamsDTO from "../DTO/ParamsDTO"
import MainPanel from './MainPanel'
import MovieDTO from '../DTO/MovieDTO'
import AdditionalPanel from './AdditionalPanel'

export default class Header extends React.Component<{
    handleInput: Function,
    handleSearch: Function,
    handleChangeSearchBy: Function,
    handleChangeSorting: Function,
    params: ParamsDTO,
    moviesCounter: number,
    selectedMovie?: MovieDTO,
    handleReturnClick: Function
}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="header" >
            <MainPanel handleInput={this.props.handleInput}
                handleSearch={this.props.handleSearch}
                handleChangeSearchBy={this.props.handleChangeSearchBy}
                handleChangeSorting={this.props.handleChangeSorting}
                params={this.props.params}
                moviesCounter={this.props.moviesCounter}
                selectedMovie={this.props.selectedMovie}
                handleReturnClick={this.props.handleReturnClick} />

            <div className="header-image" />

            <AdditionalPanel moviesCounter={this.props.moviesCounter}
                handleChangeSorting={this.props.handleChangeSorting}
                params={this.props.params} />
        </div>
    }
}