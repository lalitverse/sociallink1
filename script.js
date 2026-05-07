// ===========================
// script.js
// ===========================

const loader = document.getElementById('loader');
const container = document.querySelector('.container');

window.addEventListener('load', () => {

  setTimeout(() => {

    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';

    container.classList.remove('hidden');
    container.style.opacity = '1';

  }, 2500);

});
