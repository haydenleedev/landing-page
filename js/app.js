/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const mainNavContainer = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function addActiveClass(targets) {
    targets.classList.add("active");
}

function removeActiveClass(targets) {
    for ( let i = 1; i < navs.length + 1; i++) {
        targets[i-1].classList.remove("active");
    }
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


//document.addEventListener("DOMContentLoaded", function() {
    
function createNav(...sections) {
    let i = 1;
    const fragment = document.createDocumentFragment();
    for ( let section of sections ) {
        const sectionId = section.getAttribute("id");
        const navMenu = section.getAttribute("data-nav"); 
        const li = document.createElement("li");
        li.innerHTML =`<a href="#${sectionId}" class="menu__link">${navMenu}</a>`;
        fragment.appendChild(li);
        i++;
    }
    mainNavContainer.appendChild(fragment);
}
createNav(...sections);
    
//});


// Add class 'active' to section when near top of viewport

function addActiveOnScroll(...sections){
    window.addEventListener("scroll", function(){
        for ( let section of sections ) {
            const sectionId = section.getAttribute("id");
            let bounding = section.getBoundingClientRect();

            mainNavContainer.style.display = "none";

            if (bounding.top >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) 
            {
                addActiveClass(section); // add active class to active nav when clicked
            } else {
                section.classList.remove("active");
            }

            mainNavContainer.style.display = "block";
        }
    });
}
addActiveOnScroll(...sections);


// Scroll to anchor ID using scrollTO event

const navs = document.querySelectorAll("#navbar__list a");

function scrollToAnchor(...sections) {
    let i = 0;
    for ( let section of sections ) {
        let startPosition = window.pageYOffset;  // the number of pixels the document is currently scrolled along the vertical axis. How much scrolled from the top of document.
        let targetPosition = section.getBoundingClientRect().top;  // Distance between the current view point and the top of the target element.
        let distance = targetPosition + startPosition;
    
        navs[i].addEventListener("click", function(evt) {
            evt.preventDefault();

            window.scrollTo({
                 top:  distance,
                behavior: "smooth"
            });
        });

        i++;
    }
}
scrollToAnchor(...sections);


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active


