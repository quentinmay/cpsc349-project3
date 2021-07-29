import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.userLogin = function userLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = mockroblog.authenticateUser(username, password);
    if (user) {
        localStorage.setItem('userID', user.id);
        alert("Login succeeded");
        window.location.replace("/timeline.html");

    } else {
        console.log(username, password, user);
        alert("Login failed.");
    }
}

window.userLogout = function userLogout() {
    if (utility.isLoggedIn()) {
        localStorage.removeItem('userID');
        window.location.replace("/login.html");
    }
}