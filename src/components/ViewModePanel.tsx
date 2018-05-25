import * as React from 'react'
import { MovieDTO } from 'DTO/MovieDTO'

interface ViewModeInterface {
    selectedMovie?: MovieDTO;
    handleReturnClick: Function
}

export const ViewModePanel: React.StatelessComponent<ViewModeInterface> = (props) => {
    const handleReturnClick = () => {
        props.handleReturnClick()
    }

    const movie = props.selectedMovie

    if (movie === undefined) {
        return null
    } else {
        return <div className='view-panel'>
            <img src={movie.poster_path} className='view-image' />
            <div className='movie-info'>
                <span className='movie-title'>{movie.title}</span><span>{movie.vote_average}</span>
            </div>
            <button onClick={handleReturnClick} >Return to search</button>
        </div>
    }
}