import * as React from "react"

export class AdditionalPanel extends React.Component<{ moviesCounter:number, handleChangeSorting: Function }, {}> {
    constructor(props) {
        super(props)
        
        this.handleChangeSorting = this.handleChangeSorting.bind(this)
    }

    handleChangeSorting() {
        this.props.handleChangeSorting()
    }

    render() {
        return <div className="additional-header">
            {this.props.moviesCounter} movies found
        </div>
    }
}