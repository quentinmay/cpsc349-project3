import * as mockroblog from './mockroblog.js'

export function isLoggedIn() {
    let username = localStorage.getItem("username");
    let userID = localStorage.getItem("userID");
    if (userID && username) {
        return userID;
    } else {
        return null;
    }
}