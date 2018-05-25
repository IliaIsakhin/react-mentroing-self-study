import * as React from "react"
import { Segment } from 'semantic-ui-react'

export const NoDataMessage = () => {
    return (
        <Segment className='block'>
            <p>No films found</p>
        </Segment>
    )
}