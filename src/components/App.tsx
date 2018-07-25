import * as React from "react"
import Header from "./header/Header"
import Body from "./Body"
import MovieDTO from "./DTO/MovieDTO"
import ParamsDTO from "./DTO/ParamsDTO"
import getMovies from "../utils/MovieService"
import { EnumSortOrder, EnumSortBy, EnumSearchBy } from "./DTO/Enums/Enums"
import { sortMovies } from '../utils/utils'

export default class App extends React.Component<{}, { 
  params: ParamsDTO,
  isLoading: boolean,
  movies: MovieDTO[],
  selectedMovie?: MovieDTO,
}> {

  constructor(props) {
    super(props)

    this.state = {
      params: {
        limit: 10,
        searchBy: EnumSearchBy.TITLE,
        search: "",
        sortBy: EnumSortBy.DATE,
        sortOrder: EnumSortOrder.ASC,
      },
      isLoading: true,
      movies: [],
      selectedMovie: undefined
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this)
    this.handleChangeSorting = this.handleChangeSorting.bind(this)
    this.handleOnClickItem = this.handleOnClickItem.bind(this)
    this.handleReturnClick = this.handleReturnClick.bind(this)
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
        search: '',
        searchBy: event.target.value
      }
    })
  }

  handleChangeSorting(event) {
    this.setState({
      ...this.state,
      movies: this.sortMovies(this.state.movies, event.target.value),
      params: {
        ...this.state.params,
        sortBy: event.target.value
      }
    })
  }

  handleOnClickItem(movie) {
    window.scrollTo(0, 0)
    this.setState({
      ...this.state,
      selectedMovie: movie,
      params: {
        ...this.state.params,
        search: ''
      }
    })

  }

  handleReturnClick() {
    this.setState({
      ...this.state,
      selectedMovie: undefined
    })
  }

  sortMovies(movies: MovieDTO[], by: string): MovieDTO[]{
    return sortMovies(movies, by);
  }

  render() {
    return (
      <>
        <Header handleInput={this.handleInput}
          handleSearch={this.handleSearch}
          handleChangeSearchBy={this.handleChangeSearchBy}
          handleChangeSorting={this.handleChangeSorting}
          params={this.state.params}
          moviesCounter={this.state.movies.length}
          selectedMovie={this.state.selectedMovie}
          handleReturnClick={this.handleReturnClick} />
        <Body params={this.state.params}
          isLoading={this.state.isLoading}
          movies={this.state.movies}
          handleOnClickItem={this.handleOnClickItem} />
      </>
    )
  }
}
