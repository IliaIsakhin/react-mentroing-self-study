import * as React from 'react'
import { SearchPanel } from './SearchPanel'
import '../less/styles.less'
import { ParamsDTO } from 'ParamsDTO';
import { AdditionalPanel } from './AdditionalPanel';

export class Header extends React.Component<{handleInput: Function, 
                                             handleSearch: Function, 
                                             handleChangeSearchBy: Function, 
                                             handleChangeSorting: Function, 
                                             params:ParamsDTO, 
                                             moviesCounter: number}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="header" >

            <SearchPanel handleInput={this.props.handleInput}
                         handleSearch={this.props.handleSearch} 
                         handleChangeSearchBy={this.props.handleChangeSearchBy}
                         params={this.props.params}/>

            <div className="header-image" />

            <AdditionalPanel moviesCounter={this.props.moviesCounter} 
                             handleChangeSorting={this.props.handleChangeSorting}
                             params={this.props.params} />
        </div>
    }
}