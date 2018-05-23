import { constructURL } from '../utils/utils'

export function getMovies(url: string, params: Object) {    
    return fetch(constructURL(url, params))
        .then((response) => response.json())
        .then(responseJson => responseJson.data)
        .catch((error) => {
            console.error(error)
        })
}