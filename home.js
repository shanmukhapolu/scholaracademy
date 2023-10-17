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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav").style.background = " #00000045";
  } else {
    document.getElementById("nav").style.background = " #00000000";
  }
}