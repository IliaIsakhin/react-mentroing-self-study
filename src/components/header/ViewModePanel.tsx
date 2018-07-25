import * as React from 'react'
import MovieDTO from '../DTO/MovieDTO'
import {RatingComponent} from '../pure/RatingComponent'

interface ViewModeInterface {
    selectedMovie: MovieDTO
    handleReturnClick: Function
}

export const ViewModePanel: React.StatelessComponent<ViewModeInterface> = (props) => {

    const handleReturnClick = () => {
        props.handleReturnClick()
    }

    const {vote_average, title, overview, runtime, poster_path, release_date} = props.selectedMovie

    return <div className='view-panel'>
        <img src={poster_path} className='view-image' />
        <button onClick={handleReturnClick} className={'active-button'} >Return to search</button>
        <div className='movie-info'>
            <span className='movie-title'>{title}</span>
            <RatingComponent rating={vote_average} />
            <div>
                <span className='movie-span'>{release_date.getFullYear()}</span><span className='movie-span'>{runtime} min</span>
            </div>
            <br />
            <span className='movie-description'>{overview}</span>
        </div>
    </div>
}