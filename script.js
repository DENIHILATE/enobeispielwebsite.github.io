// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Cookie banner (simple, no tracking)
//const cookieBanner = document.getElementById('cookieBanner');
//const accept = document.getElementById('cookieAccept');
//const decline = document.getElementById('cookieDecline');
//const COOKIE_KEY = 'cookieConsent';

//function hideBanner() { cookieBanner?.classList.add('hide'); }
//function setConsent(value) { localStorage.setItem(COOKIE_KEY, value); }

//if (localStorage.getItem(COOKIE_KEY)) hideBanner();

//accept?.addEventListener('click', () => { setConsent('accepted'); hideBanner(); });
//decline?.addEventListener('click', () => { setConsent('declined'); hideBanner(); });

//const header = document.querySelector('.site-header');
//function setBodyOffset() {
//    document.body.style.paddingTop = header.offsetHeight + 'px';
//}
//window.addEventListener('load', setBodyOffset);
//window.addEventListener('resize', setBodyOffset);

//document.documentElement.style.setProperty('--header-offset', header.offsetHeight + 'px');
//window.addEventListener('resize', () =>
//    document.documentElement.style.setProperty('--header-offset', header.offsetHeight + 'px')
//);

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            navToggle.classList.toggle("active");
        });
    }
});

    // Automatisch Service + Preis ins Formular eintragen
document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service');
        const price = btn.getAttribute('data-price');

        document.getElementById('service').value = service;
        document.getElementById('price').value = price;

        // Optional: Nachricht-Feld mit Text füllen
        // Nachricht-Feld IMMER überschreiben
        const msgField = document.getElementById('message');
        msgField.value = `Ich interessiere mich für ${service} (${price}). Bitte senden Sie mir ein Angebot.`;
    });
});

// AJAX-Formular mit Popup
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // kein Seiten-Reload

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('mail.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // Popup zeigen
            document.getElementById('thankYouModal').style.display = 'flex';
            form.reset(); // Formular leeren
        } else {
            alert("Fehler: Anfrage konnte nicht gesendet werden.");
        }
    } catch (err) {
        alert("Verbindungsfehler: " + err.message);
    }
});

// Modal schließen
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('thankYouModal').style.display = 'none';
});

// Impressum Popup
const openImpressum = document.getElementById('openImpressum');
const impressumModal = document.getElementById('impressumModal');
const closeImpressum = document.getElementById('closeImpressum');

if (openImpressum && impressumModal && closeImpressum) {
    openImpressum.addEventListener('click', (e) => {
        e.preventDefault();
        impressumModal.style.display = 'flex';
    });
    closeImpressum.addEventListener('click', () => {
        impressumModal.style.display = 'none';
    });
    // Klick auf Hintergrund schließt Popup
    impressumModal.addEventListener('click', (e) => {
        if (e.target === impressumModal) {
            impressumModal.style.display = 'none';
        }
    });
}

// Datenschutz Popup
const openDatenschutz = document.getElementById('openDatenschutz');
const datenschutzModal = document.getElementById('datenschutzModal');
const closeDatenschutz = document.getElementById('closeDatenschutz');

if (openDatenschutz && datenschutzModal && closeDatenschutz) {
    openDatenschutz.addEventListener('click', (e) => {
        e.preventDefault();
        datenschutzModal.style.display = 'flex';
    });
    closeDatenschutz.addEventListener('click', () => {
        datenschutzModal.style.display = 'none';
    });
    // Klick auf Hintergrund schließt Popup
    datenschutzModal.addEventListener('click', (e) => {
        if (e.target === datenschutzModal) {
            datenschutzModal.style.display = 'none';
        }
    });
}

// Modal öffnen
function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open"); // auch <html>
}

// Modal schließen
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
}

// Schließen beim Klick auf Hintergrund
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
        document.body.classList.remove("modal-open");
        document.documentElement.classList.remove("modal-open");
    }
});
