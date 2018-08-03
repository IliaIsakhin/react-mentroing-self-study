import { StateType } from "../types";
import { Dispatch, connect } from "react-redux";
import { SelectMovieAction } from "../actions";
import  Header from '../components/Header'

function mapStateToProps({selectedMovie}) {
    return {
        selectedMovie
    }
}

function mapDispatchToProps() {
    return {
        // onSelectMovie: id => dispatch(selectMovieActionCreator(id))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Header)