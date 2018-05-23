import * as React from "react"
import { Header } from "./Header"
import { Body } from "./Body"
import { Footer } from "./Footer"

export class App extends React.Component<{}, {params: Object}> {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.setState({
      params: {
        limit: 20
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Body  params={this.state.params}/>
        <Footer />
      </div>
    )
  }
}
