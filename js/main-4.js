const logosFlotantes = document.getElementById('logos-flotantes');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.2) {
    logosFlotantes.classList.add('abajo');
  } else {
    logosFlotantes.classList.remove('abajo');
  }
});