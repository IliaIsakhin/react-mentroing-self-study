import * as React from "react"
import { Header } from "./Header"
import { Body } from "./Body"
import { Footer } from "./Footer"
import { MovieDTO } from "MovieDTO"

export class App extends React.Component<{}, { movieList: MovieDTO[] }> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
