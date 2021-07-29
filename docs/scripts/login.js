import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.userLogin = function userLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = mockroblog.authenticateUser(username, password);
    if (user) {
        document.cookie = "userID=" + user.id + '; expires=' + new Date(2147483647 * 1000).toUTCString();
        alert("Login succeeded");
        window.location.replace("/timeline.html");

    } else {
        console.log(username, password, user);
        alert("Login failed.");
    }
}

window.userLogout = function userLogout() {
    if (utility.isLoggedIn()) {
        document.cookie = "userID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.replace("/login.html");
    }
}