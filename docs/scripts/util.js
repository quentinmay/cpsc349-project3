import * as mockroblog from './mockroblog.js'

export function isLoggedIn() {
    let userID = localStorage.getItem("userID");
    if (userID) {
        return userID;
    } else {
        return null;
    }
}