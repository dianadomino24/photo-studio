const { doc } = require("prettier");

// const toTopButton = document.querySelector('.footer__button')
// toTopButton.addEventListener('click', scrollTopFunction)

function scrollTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
