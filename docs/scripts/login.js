import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.userLogout = function userLogout() {
    if (utility.isLoggedIn()) {
        localStorage.removeItem('userID');
        window.location.replace("/login.html");
    }
}

let button = document.getElementById('loginButton');
button.addEventListener('click', () => {
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

let button2 = document.getElementById('registerButton');
button2.addEventListener('click', () => {
    let username = document.getElementById('regUsername').value;
    let password = document.getElementById('regPassword').value;
    let email    = document.getElementById('email').value;

    if(mockroblog.createUser(username, email, password)){
        alert("Account successfully created. Please Login");
    }
    else{
        alert("An Account with that information already exists. Please try again.");
    }
});

let button3 = document.getElementById('login-link')
button3.addEventListener('click', () =>{
    document.getElementById('register-container').style.visibility="hidden";
    document.getElementById('login-container').style.visibility="visible";
});

let button4 = document.getElementById('signup-link')
button4.addEventListener('click', () =>{
    document.getElementById('register-container').style.visibility="visible";
    document.getElementById('login-container').style.visibility="hidden";
});
