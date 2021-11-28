/**
 * Define Global Variables
 * 
*/

// array of sections
const sections=document.querySelectorAll('section');

// get the <ul> to append Elements on
const menu=document.querySelector('#navbar__list');

// get the scroll-to-top Btn
var mybutton = document.getElementById("topBtn");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// show/hide Btn
function showBtn() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        // edit Btn style to show it
        mybutton.style.display = "block";
    } else {
        // edit Btn style to hide it
        mybutton.style.display = "none";
    }
}

// scrollToTop of the page after clicking on the Btn
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function myNavBar(){
    // loop sections
    sections.forEach(section=>{
        // build nav
        // creating <li>, <a> elements
        let link = document.createElement('a');
        let listItem = document.createElement('li');
        // set Attributes for elements
        link.innerHTML=`${section.dataset.nav}`;
        link.classList.add('menu__link');
        link.setAttribute('href', `${section.id}`);        
        listItem.classList.add('navbar__menu');
        // appending elements in <ul> in navBar
        listItem.appendChild(link);
        menu.appendChild(listItem);

        // Scroll to anchor ID using scrollTO event
        link.addEventListener('click', evt =>{
            evt.preventDefault();
            window.scrollTo({top:section.offsetTop});
        });
    })
}

// Add class 'active' to section when near top of viewport
function secActivition(){
    // loop sections
    sections.forEach(section=>{
        // getting rectangular area of sec
        let scrollPos=section.getBoundingClientRect().top;
        // add and remove active state under a condition
        if (scrollPos>-167 && scrollPos<167){
            section.classList.add('your-active-class');
        }else {
            section.classList.remove('your-active-class');
        }
    })    
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu & Scroll to section on link click
myNavBar();

// Set sections as active
window.addEventListener('scroll', secActivition);

// Show the Button
window.onscroll = function() {showBtn()};