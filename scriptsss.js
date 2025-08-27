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
