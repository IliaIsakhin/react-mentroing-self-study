import * as React from "react"
import { Label } from 'semantic-ui-react'

export class GenreItem extends React.Component<{value: string}, {}> {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <Label horizontal>{this.props.value}</Label>
        )
    }
}