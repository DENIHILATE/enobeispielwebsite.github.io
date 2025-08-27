// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Cookie banner (simple, no tracking)
const cookieBanner = document.getElementById('cookieBanner');
const accept = document.getElementById('cookieAccept');
const decline = document.getElementById('cookieDecline');
const COOKIE_KEY = 'cookieConsent';

function hideBanner() { cookieBanner?.classList.add('hide'); }
function setConsent(value) { localStorage.setItem(COOKIE_KEY, value); }

if (localStorage.getItem(COOKIE_KEY)) hideBanner();

accept?.addEventListener('click', () => { setConsent('accepted'); hideBanner(); });
decline?.addEventListener('click', () => { setConsent('declined'); hideBanner(); });

const header = document.querySelector('.site-header');
function setBodyOffset() {
    document.body.style.paddingTop = header.offsetHeight + 'px';
}
window.addEventListener('load', setBodyOffset);
window.addEventListener('resize', setBodyOffset);

// falls du ein mobiles Dropdown hast, Höhe nach Toggle neu messen:
navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    requestAnimationFrame(setBodyOffset);
});

document.documentElement.style.setProperty('--header-offset', header.offsetHeight + 'px');
window.addEventListener('resize', () =>
    document.documentElement.style.setProperty('--header-offset', header.offsetHeight + 'px')
);
