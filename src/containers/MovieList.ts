import { Dispatch, connect } from "react-redux";
import { SelectMovieAction, selectMovieActionCreator } from "../actions";
import  MovieList from '../components/MovieList'

function mapStateToProps({movies, selectedMovie}) {
    return {
        movies,
        selectedMovie
    }
}

function mapDispatchToProps(dispatch: Dispatch<SelectMovieAction>) {
    return {
        onSelectMovie: id => dispatch(selectMovieActionCreator(id))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MovieList)