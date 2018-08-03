import { MovieType } from "../types";

export default function constructURL(url: string, params: Object) {
    if (params) {
        url += '?';
        Object.keys(params).forEach(key => url += key + '=' + params[key] + '&')

        if (url.charAt(url.length - 1) == '&') {
            url = url.substring(0, url.length - 1)
        }
    }

    return url
}

export function sortMovies(movies: MovieType[], by: string): MovieType[] {
    switch (by) {
        case 'release_date':
            var compare = (a, b) => a.release_date.getTime() - b.release_date.getTime();
            
            break;
        case 'vote_average':
            compare = (a, b) => a.vote_average - b.vote_average;

            break;
        default:
            return movies;
    }

    return movies.sort(compare);
}