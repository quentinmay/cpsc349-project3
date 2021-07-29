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

function populateTimeline() {
    const timeline = mockroblog.getPublicTimeline()
    const display = document.querySelector('#timeline-json')
    display.textContent = JSON.stringify(timeline, null, 2)
}

