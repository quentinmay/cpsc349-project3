import * as mockroblog from './mockroblog.js'

window.userLogin = function userLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = mockroblog.authenticateUser(username, password);
    password
    if (user) {
        document.cookie = "userID=" + user.id + '; expires=' + new Date(2147483647 * 1000).toUTCString();
        alert("Login succeeded");
        window.location.replace("/timeline.html");

    } else {
        console.log(username, password, user);
        alert("Login failed.");
    }
}