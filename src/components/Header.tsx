import * as React from 'react'
import { MovieType } from '../types';
import SearchModeHeader from './SearchModeHeader'

interface Props {
    selectedMovie?: MovieType
}

export default function Header ({selectedMovie} : Props) {
    if (selectedMovie) {
        return <>{selectedMovie.title}</> //ViewModeHeader
    } else {
        return <SearchModeHeader />
    }
}