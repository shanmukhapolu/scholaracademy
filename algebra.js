const units = document.querySelectorAll('.unit');

units.forEach(unit => {
  unit.addEventListener('click', () => {
    unit.classList.toggle('active');
    const skills = unit.nextElementSibling;
    skills.classList.toggle('visible');
    const toggle = unit.querySelector('.toggle');
    toggle.innerHTML = toggle.innerHTML === '+' ? '-' : '+';
  });
});