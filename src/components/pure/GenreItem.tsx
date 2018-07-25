import * as React from "react"

interface GenreItemProps {
    value: string
}

export const GenreItem: React.SFC<GenreItemProps> = (props) => {
    return <span className='genre-item'>{props.value}</span>
}