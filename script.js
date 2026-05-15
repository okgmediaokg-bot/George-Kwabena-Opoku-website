
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(5, 24, 48, 0.85)';
    navbar.style.backdropFilter = 'blur(8px)';
    navbar.style.padding = '1rem';
    navbar.style.borderRadius = '16px';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
  }
});