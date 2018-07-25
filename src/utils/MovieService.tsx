import constructURL from './utils'
var serverResponse = require('../../server-response.json')

export default function getMovies(url: string, params: Object) {
    return fetch(constructURL(url, params))
        .then((response) => response.json())
        .then(responseJson => responseJson.data)
        .then(data => data.map(
            a => {
                a.release_date = new Date(a.release_date)
                return a
            }
        ))
        .catch(() => serverResponse.data)
}
