import * as React from "react"
import { Header } from "./Header"
import { Body } from "./Body"
import { Footer } from "./Footer"
import { MovieDTO } from "MovieDTO";
import { ParamsDTO } from "ParamsDTO";
import { getMovies } from "./MovieService"

export class App extends React.Component<{}, { params: ParamsDTO, isLoading: boolean, movies: MovieDTO[]}> {

  constructor(props) {
    super(props)

    this.state = {
      params: {
        limit: 10,
        searchBy: 'title',
        search: ''
      },
      isLoading: true,
      movies: []
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this)
    this.handleChangeSorting = this.handleChangeSorting.bind(this)
  }

  componentWillMount() {
    this.doFetch()
  }

  doFetch() {
    let url = '//react-cdp-api.herokuapp.com/movies';

    getMovies(url, this.state.params).then(result => {
      if (result) {
        this.setState({
          ...this.state,
          isLoading: false,
          movies: result
        })
      }
    })
  }

  handleInput(event) {
    let key = event.key

    this.setState({
      ...this.state,
      params: {
        ...this.state.params,
        search: event.target.value
      }
    })
    
    if (key == 'Enter') {
      this.handleSearch()
    }
  }

  handleSearch() {
    this.setState({
      ...this.state,
      isLoading: true
    })

    this.doFetch()
  }

  handleChangeSearchBy(event) {
    this.setState({
      ...this.state,
      params: {
        ...this.state.params,
        searchBy: event.target.value
      }
    })
  }
  
  handleChangeSorting(event) {
    this.setState({
      ...this.state,
      params: {
        ...this.state.params,
        sortBy: event.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <Header handleInput={this.handleInput}
                handleSearch={this.handleSearch}
                handleChangeSearchBy={this.handleChangeSearchBy}
                handleChangeSorting={this.handleChangeSorting}
                params={this.state.params} 
                moviesCounter={this.state.movies.length}/>
        <Body params={this.state.params}
              isLoading={this.state.isLoading} 
              movies={this.state.movies} />
        <Footer />
      </div>
    )
  }
}
