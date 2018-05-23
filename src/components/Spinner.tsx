import * as React from "react"
import { Loader, Segment } from 'semantic-ui-react'

export const Spinner = () => {
    return (
        <Segment>
            <Loader active />
        </Segment>
    )
}