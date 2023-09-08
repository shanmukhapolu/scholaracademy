const toggles = document.querySelectorAll('.toggle');
toggles.forEach((toggle) =>
  toggle.addEventListener('click', () => {
    const skills = toggle.nextElementSibling;
    skills.classList.toggle('visible');
    toggle.textContent = toggle.textContent == '+' ? '-' : '+';
  })
);