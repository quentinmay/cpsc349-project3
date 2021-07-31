import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.userLogin = function userLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = mockroblog.authenticateUser(username, password);
    if (user) {
        localStorage.setItem('userID', user.id);
        localStorage.setItem('username', user.username);
        alert("Login succeeded");
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/index.html`)
        // window.location.replace("/");

    } else {
        console.log(username, password, user);
        alert("Login failed.");
    }
}

window.userLogout = function userLogout() {
    if (utility.isLoggedIn()) {
        localStorage.removeItem('userID');
        localStorage.removeItem('username');
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/login.html`)
        // window.location.href = `${window.location.pathname}/login.html`;
        // window.location.replace("/login.html");
    }
}