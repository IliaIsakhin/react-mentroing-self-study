import * as React from "react"
import { SearchPanel } from "./SearchPanel"
import '../less/styles.less'

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="header" >
            <div className="header-image">
                <SearchPanel />
            </div>
            <div className="after" />
        </div>
    }
}