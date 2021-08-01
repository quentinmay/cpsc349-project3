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

export function userLogout() {
    if (isLoggedIn()) {
        localStorage.removeItem('userID');
        localStorage.removeItem('username');
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/login.html`);
        return true;
    }
    return false;
}