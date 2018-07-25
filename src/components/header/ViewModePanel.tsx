import * as React from 'react'
import MovieDTO from '../DTO/MovieDTO'
import RatingComponent from '../RatingComponent'

interface ViewModeInterface {
    selectedMovie: MovieDTO
    handleReturnClick: Function
}

export const ViewModePanel: React.StatelessComponent<ViewModeInterface> = (props) => {

    const handleReturnClick = () => {
        props.handleReturnClick()
    }

    const movie = props.selectedMovie
    const rating: number = movie.vote_average

    return <div className='view-panel'>
        <img src={movie.poster_path} className='view-image' />
        <button onClick={handleReturnClick} className={'active-button'} >Return to search</button>
        <div className='movie-info'>
            <span className='movie-title'>{movie.title}</span>
            <RatingComponent value={rating} />
            <div>
                <span className='movie-span'>{props.selectedMovie.release_date.getFullYear()}</span><span className='movie-span'>{movie.runtime} min</span>
            </div>
            <br />
            <span className='movie-description'>{movie.overview}</span>
        </div>
    </div>
}