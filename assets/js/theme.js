window.onload = function () {

// logo   
const logo = document.querySelector('#logo');
logo.addEventListener('click',  () => {
  document.location = 'index.html'
})

// // Burger menu 
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('active');
		header.classList.toggle('sticky');
	});

// Scroll Up 
document.addEventListener("scroll", scrolling);

let scrollUpButton = document.querySelector("#scrollUpButton");

function scrolling() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.3;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

scrollUpButton.addEventListener("click", scrollToTop);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
}

