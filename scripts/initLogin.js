import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.mockroblog = mockroblog
onBoot();
function onBoot() {
    let loggedIn = utility.isLoggedIn();
    if (loggedIn) {
        //https://stackoverflow.com/questions/16984943/how-to-get-the-directory-part-of-current-url-in-javascript/16985051
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/index.html`)
    }

}

