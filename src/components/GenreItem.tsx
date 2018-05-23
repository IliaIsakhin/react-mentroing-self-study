import * as React from "react"
import { Label } from 'semantic-ui-react'

interface GenreItemProps {
    value: string
}

export const GenreItem: React.SFC<GenreItemProps> = (props) => {
    return <Label horizontal>{props.value}</Label>
}