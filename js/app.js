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


// Add class 'active' to section when near top of viewport

const isScrolledIntoView = (element) => {
    let bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  

function addActiveOnScroll(...sections){
    window.addEventListener("scroll", activeScrollCallback);
    window.addEventListener("touchmove", activeScrollCallback);  // For mobile devices

    function activeScrollCallback(){
        for ( let section of sections ) {
            const sectionId = section.getAttribute("id");
            let bounding = section.getBoundingClientRect();
            const targetMenu = document.querySelector(".menu__link[href='#" + sectionId + "']");
            mainNavContainer.style.display = "none";

           // const viewPort = (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)

            if (isScrolledIntoView(section)) 
            {
                addActiveClass(section); // add active class to active section when scrolled
                addActiveClass(targetMenu); // add active class to active nav when scrolled
            } else {
                section.classList.remove("active");
                targetMenu.classList.remove("active");
            }

            mainNavContainer.style.display = "block";
        }
    }
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


// Mobile Navigation

const mobileMenu = document.querySelector("#menuicon");

mobileMenu.addEventListener("click", mobileMenuClick);
const navBar = document.querySelector("#navbar__list");
const body = document.querySelector("body");

function mobileMenuClick() {
    navBar.style.display = "block";
    navBar.classList.toggle("mobile-show");
    body.classList.toggle("open");
}


// When clicking menu on mobile devices, hide the full screen mobile nav view.
const menuLinks = document.querySelectorAll(".menu__link");
function mobleMenuClick(...menuLinks) {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 740) {
        let i = 0;
        for ( let menuLink of menuLinks ) {
        menuLink.addEventListener("click", onClickChangeClasses);
        }
    }
}

// When resizing window, hide the full screen mobile nav view when clicking the menu.
window.addEventListener('resize', function () {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
		mobleMenuClick(...menuLinks);
}, false);

mobleMenuClick(...menuLinks);

// Callback function of mobile menu clicks.
function onClickChangeClasses() {
    navBar.style.display = "none";
    navBar.classList.remove("mobile-show");
    body.classList.remove("open");
    this.classList.add("active");
}

// Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.

document.addEventListener("scroll", addButtonOnScroll, false);
document.addEventListener("swheel", addButtonOnScroll, false);

function addButtonOnScroll() {
    const scrollTopButton = document.querySelector(".scroll-top");
    let scrollToTop ='<a href="#top" class="scroll-top">Scroll To Top</a>';

    let scrollPos = window.scrollY;  // the number of pixels the document is currently scrolled along the vertical axis. How much scrolled from the top of document.


    if ( scrollPos > 500 ) {
        
        scrollTopButton.classList.remove("hide");
    } else {
        scrollTopButton.classList.remove("hide");
        scrollTopButton.classList.add("hide");
    }
}




