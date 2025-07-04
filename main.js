const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav =document.querySelector('#primary-nav');

navToggle.addEventListener('click', () => {
    const navOpen = navToggle.getAttribute('aria-expanded');
    if (navOpen === 'false') {
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        navToggle.setAttribute('aria-expanded', 'false');
    }
    console.log(navOpen);
});