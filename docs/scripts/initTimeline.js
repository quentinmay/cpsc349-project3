import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.mockroblog = mockroblog
onBoot();
function onBoot() {
    let loggedIn = utility.isLoggedIn();
    if (loggedIn) {
        populateTimeline();
    } else { // If not logged in, take them back to the log-in page
        window.location.replace("/login.html");
    }
}

let userBtn = document.getElementById('user-button');
let homeBtn = document.getElementById('home-button');
let publicBtn = document.getElementById('public-button');

userBtn.addEventListener('click', () => {
    const timeline = mockroblog.getUserTimeline(username);
    const display = document.querySelector('#timeline-json')
    display.textContent = JSON.stringify(timeline, null, 2)
});

homeBtn.addEventListener('click', () => {
    const timeline = mockroblog.getHomeTimeline(username);
    const display = document.querySelector('#timeline-json')
    display.textContent = JSON.stringify(timeline, null, 2)
});

publicBtn.addEventListener('click', () => {
    const timeline = mockroblog.getPublicTimeline();
    const display = document.querySelector('#timeline-json')
    display.textContent = JSON.stringify(timeline, null, 2)
});

function populateTimeline() {
    const timeline = mockroblog.getPublicTimeline();
    const display = document.querySelector('#timeline-json')
    display.textContent = JSON.stringify(timeline, null, 2)
}