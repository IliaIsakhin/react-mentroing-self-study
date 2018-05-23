import * as React from "react"
import '../less/styles.less'

export class SearchPanel extends React.Component {
    render() {
        return <div className="search-panel">
            <input/>
            <p>Search by</p>
            <input type="radio"/>
            <input type="radio"/>
        </div>
    }
}