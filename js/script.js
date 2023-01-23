// sticky header & displaying the download link in the navigation bar & display a link to go to the top of the page
window.onscroll = function() {stickyFunction(), scrollSpy()};
// window.onscroll = function(){scrollSpy()};
var header = document.getElementById("topNav");
var sticky = header.offsetTop;
var navDownloadButton = document.getElementById("navDownloadButton");
var backToTop = document.getElementById("backToTop");

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    //adding sticky class to the navigation bar
    header.classList.add("sticky");
    //display the download link in the navigation bar
    navDownloadButton.style.display = "block";
    // display the link to go the top of the page
    backToTop.classList.add("show");
  } else {
    header.classList.remove("sticky");
    navDownloadButton.style.display = "none";
    backToTop.classList.remove("show")
  }
}


// mobile device navigation
const primaryNav = document.getElementById("siteNav");
const mobileToggleOpen = document.getElementById("mobileToggleOpen");
const mobileToggleClose = document.getElementById("mobileToggleClose");
const visibility = primaryNav.getAttribute("data-visible");

mobileToggleOpen.addEventListener("click", () => {
   
   if (visibility === "false"){
       primaryNav.setAttribute("data-visible", true);
       mobileToggleOpen.setAttribute("aria-expanded", true);
   }
}); 

mobileToggleClose.addEventListener("click", () => {
  const nvisibility = primaryNav.getAttribute("data-visible");
  if (nvisibility === "true"){
    primaryNav.setAttribute("data-visible", false);
    mobileToggleOpen.setAttribute("aria-expanded", false);
}

});


// Scroll-spy
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".site-nav-links");

function scrollSpy() {

    section.forEach (sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {

        navLinks.forEach (links => {
            links.classList.remove("active");
            document.querySelector('.site-nav-links[href*=' + id + ']').classList.add("active");
        })
      
      }
    })
};



// displaying some about me content
var aboutButtons = document.getElementsByClassName("about-button");
var links = document.getElementsByClassName("list");

function opentab(tabname) {

    for(aboutButton of aboutButtons) {

        aboutButton.classList.remove("active-button");
    }

    for(link of links) {

        link.classList.remove("active-more");
    }

    event.currentTarget.classList.add("active-button");
    document.getElementById(tabname).classList.add("active-more");
}