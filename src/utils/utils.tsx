export function constructURL(url: string, params: Object) {
    if (params) {
        url += '?';
        Object.keys(params).forEach(key => url += key + '=' +params[key] + '&')

        if (url.charAt(url.length) == '&') {
            url = url.substring(0, url.length - 1)
        }
    }

    return url
}