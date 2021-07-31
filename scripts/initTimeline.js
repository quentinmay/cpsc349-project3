import * as mockroblog from './mockroblog.js'
import * as utility from "./util.js"

window.mockroblog = mockroblog
onBoot();
function onBoot() {
    let loggedIn = utility.isLoggedIn();
    if (loggedIn) {
        populateTimeline();
    } else { // If not logged in, take them back to the log-in page
        //https://stackoverflow.com/questions/16984943/how-to-get-the-directory-part-of-current-url-in-javascript/16985051
        window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/login.html`)

    }
}

// Buttons
let userBtn = document.getElementById('user-button');
let homeBtn = document.getElementById('home-button');
let publicBtn = document.getElementById('public-button');
let followButn = document.getElementById('follow-button');
let formerBtn = 'Unfollow';

// Follow Button
followButn.addEventListener('click', () => {
    const tmpBtn = followButn.innerHTML;
    followButn.innerHTML = formerBtn;
    formerBtn = tmpBtn;
});

// User Timeline Button
userBtn.addEventListener('click', () => {
    let user = localStorage.getItem("username");
    if (user) {
        const timeline = mockroblog.getUserTimeline(user);
        appendPosts(timeline);
    }
});

// Home Timeline Button
homeBtn.addEventListener('click', () => {
    let user = localStorage.getItem("username");
    if (user) {
        appendPosts(mockroblog.getHomeTimeline(user));
    }
});

// Public Timeline Button
publicBtn.addEventListener('click', () => {
    appendPosts(mockroblog.getPublicTimeline());
});

// Follow Button
//followBtn.addEventListener('click', () => {

//});

function populateTimeline() {
    appendPosts(mockroblog.getPublicTimeline());
}

function appendPosts(timelineJson) {
    let posts = document.querySelector('#post-container');
    posts.innerHTML = "";
    for (let post of timelineJson) {
        /*
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                      <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                      <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                </div>
        */
        let newPost = document.createElement('div');
        newPost.innerHTML = `<div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <img src="https://via.placeholder.com/150/0492C2/FFFFFF?text=${(mockroblog.getUserName(post.user_id))}" class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"></img>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">${(mockroblog.getUserName(post.user_id))}</h2>
                <p class="leading-relaxed text-base">${post.text}</p>
                <a class="mt-3 text-black-500 inline-flex items-center">${post.timestamp}</a>
                <button class="hyperlink px-8 py-2" id="follow-button">Follow</button>
            </div>
        </div>
        `

        //Add follower
        let followBtn = newPost.children[0].children[1].children[3];
        followBtn.addEventListener('click', () => {
            let loggedInUser = localStorage.getItem("userID");
            if (loggedInUser && post.user_id) {
                mockroblog.addFollower(loggedInUser, post.user_id)
                console.log(`Added follower: ${post.user_id}`);
            }
        });
        posts.appendChild(newPost);
    }
    return;
}