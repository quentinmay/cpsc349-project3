import * as mockroblog from './mockroblog.js'

export function isLoggedIn() {
    var cookies = Object.fromEntries(document.cookie.split('; ').map(x => x.split(/=(.*)$/, 2).map(decodeURIComponent)))
    try {
        if (cookies.userID) {
            return cookies.userID;
        }
    } catch (err) {
    }
    return null;
}