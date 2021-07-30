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
    let user = localStorage.getItem("username");
    if (user) {
        const timeline = mockroblog.getUserTimeline(user);
        // const display = document.querySelector('#timeline-json');

        let posts = document.querySelector('#post-container');
        posts.innerHTML = "";
        for (let post of timeline) {
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
            newPost.innerHTML = `                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">${post.user_id}</h2>
              <p class="leading-relaxed text-base">${post.text}</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">${post.timestamp}
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
        </div>`

            posts.appendChild(newPost);
        }

        // display.textContent = JSON.stringify(timeline, null, 2)
    }

});

homeBtn.addEventListener('click', () => {
    let user = localStorage.getItem("username");
    if (user) {
        const timeline = mockroblog.getHomeTimeline(user);
        const display = document.querySelector('#timeline-json')
        display.textContent = JSON.stringify(timeline, null, 2)
    }
});

publicBtn.addEventListener('click', () => {
    const timeline = mockroblog.getPublicTimeline();
    // const display = document.querySelector('#timeline-json')
    // display.textContent = JSON.stringify(timeline, null, 2)
});

function populateTimeline() {
    const timeline = mockroblog.getPublicTimeline();
    // const display = document.querySelector('#timeline-json')
    // display.textContent = JSON.stringify(timeline, null, 2)
}