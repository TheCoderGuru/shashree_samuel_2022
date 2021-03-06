const navLinks = document.querySelectorAll(".navbar__navlinks__navitem");

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar__navlinks");

  //! Toggle nav

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });


    //!  Burger Animation


    burger.classList.toggle("toggle");
  });
};

navSlide();


//! Active Link Onclick


// When the user scrolls the page, execute myFunction

window.onscroll = function () {
  myFunction();
};

// Get the header

var header = document.getElementById("home");

// Get the offset position of the navbar

var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Dark Mode

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkMode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
  console.log("Enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkMode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
  console.log("Disabled");
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});



// TODO Function to display the cards as none


let readMore = document.querySelector('.read-more');
let button = document.querySelector('.read_more_btn');

button.addEventListener('click', () => {
  readMore.classList.toggle('d-none');
  console.log('Clicked')
  button.innerHTML = 'Read More'

  if(!readMore.classList.contains('d-none')){
    button.innerHTML = 'Read Less'
  }
})