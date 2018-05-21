export function getMovies() {
    return fetch('//react-cdp-api.herokuapp.com/movies')
        .then((response) => response.json())
        .then(responseJson =>  responseJson.data)
        .catch((error) => {
            console.error(error)
        })
}