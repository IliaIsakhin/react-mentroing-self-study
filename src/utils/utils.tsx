export function constructURL(url: string, params: Object) {
    if (params) {
        url += '?';
        Object.keys(params).forEach(key => url += key + '=' +params[key])
    }
    
    return url
}