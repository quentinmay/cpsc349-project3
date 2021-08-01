import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"


let loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
    let username = document.getElementById('usernameN').value;
    let password = document.getElementById('passwordN').value;
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
});

let registerButton = document.getElementById('registerButton');
registerButton.addEventListener('click', () => {
    let username = document.getElementById('regUsername').value;
    let password = document.getElementById('regPassword').value;
    let email = document.getElementById('email').value;
    let createdUser = mockroblog.createUser(username, email, password);

    if (createdUser) {
        alert("Account successfully created. Please Login");
        localStorage.setItem('userID', createdUser.id);
        localStorage.setItem('username', createdUser.username);
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/index.html`)

    }
    else {
        alert("An Account with that information already exists. Please try again.");
    }
});

let button3 = document.getElementById('login-link')
button3.addEventListener('click', () => {
    document.getElementById('register-container').hidden = true;
    document.getElementById('login-container').hidden = false;
});

let button4 = document.getElementById('signup-link')
button4.addEventListener('click', () => {
    document.getElementById('register-container').hidden = false;
    document.getElementById('login-container').hidden = true;
});
