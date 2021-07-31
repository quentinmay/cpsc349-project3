import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.mockroblog = mockroblog
onBoot();
function onBoot() {
    let loggedIn = utility.isLoggedIn();
    if (loggedIn) {
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/index.html`)
        // window.location.href = `${window.location.pathname}/index.html`;
    }

}

