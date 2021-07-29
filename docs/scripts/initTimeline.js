import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.mockroblog = mockroblog
onBoot();
function onBoot() {
    let loggedIn = utility.isLoggedIn();
    if (loggedIn) {
        populateTimeline();
    } else { //If not logged in, take em back to the log in page
        window.location.replace("/login.html");
    }
}

let userBtn = document.getElementById('user-button');
let homeBtn = document.getElementById('home-button');
let publicBtn = document.getElementById('public-button');

userBtn.addEventListener('click', () => {
    // action will go here
    alert("clicked user button");
});

function populateTimeline() {
    const timeline = mockroblog.getPublicTimeline();

    const display = document.querySelector('#timeline-json')
    display.textContent = JSON.stringify(timeline, null, 2)
}

