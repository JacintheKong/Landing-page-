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

//Populate navigation with JS
let navLists = [];
let childElement;
let appendChildElement;
let parentElement;

// Bind to id navList
parentElement = document.getElementById('navList');

// Add navList
navLists.push({
    textContent: 'Partners',
    href: "#section1"
});
navLists.push({
    textContent: 'What is STEM',
    href: "#section2"
});
navLists.push({
    textContent: 'Brain Building',
    href: "#section3"
});
navLists.push({
    textContent: 'Asking questions',
    href: "#section4"
});
navLists.push({
    textContent: 'Guidance',
    href: "#section5"
});

// Add child elements
for (let navList of navLists) {
    childElement = document.createElement('li');
    appendChildElement = parentElement.appendChild(childElement)
    appendChildElement.innerHTML = '<a href="' + navList.href + '">' + navList.textContent + '</a>'
}

//Navbar slides in and out when viewed on mobile screen
const lines = document.querySelector('.lines');
const nav = document.querySelector('.navbar__list');
const navLinks = document.querySelectorAll('.navbar__list li');

lines.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`;
        }
    });
});

//An active state is added to the navigation items when a section is in the viewport
const NavLinks = document.querySelectorAll("nav ul li a");
const Sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    NavLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        const box = section.getBoundingClientRect();
        if (
            box.top <= 150 && box.bottom >= 150
        ) {
            section.classList.add("current-section");
            link.classList.add("current");
        } else {
            section.classList.remove("current-section");
            link.classList.remove("current");
        }
    });
});

// Hide the navbar when scroll down and show it when scroll up
var previousScroll = 0;
var navList = document.getElementById('navList'),
    navClasses = navList.classList;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const isDown = currentScroll > previousScroll;

    if (isDown && !navClasses.contains('scrolled')) {
        navClasses.add('scrolled');
    } else if (!isDown) {
        navClasses.remove('scrolled');
    }
    previousScroll = currentScroll;
});

// Scroll to top when the arrow up button is clicked
const scrollToTop = document.querySelector("#scrollToTop");
scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});