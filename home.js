const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('unsticky');
  } else {
    navbar.classList.remove('unsticky');
  }
});