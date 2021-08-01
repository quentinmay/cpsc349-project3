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
        //https://stackoverflow.com/questions/16984943/how-to-get-the-directory-part-of-current-url-in-javascript/16985051
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/index.html`)

    } else {
        console.log(username, password, user);
        alert("Login failed.");
    }
}
