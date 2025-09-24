// Fungsi untuk tombol beli
function beli(item) {
    window.location.href = 'purchase.html?item=' + encodeURIComponent(item);
}

// Event listener untuk form spesifik di index.html
document.addEventListener('DOMContentLoaded', function() {
    const formSpesifik = document.getElementById('form-spesifik');
    if (formSpesifik) {
        formSpesifik.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const jenis = document.getElementById('jenis').value;
            const fitur = document.getElementById('fitur').value;
            const budget = document.getElementById('budget').value;

            alert(`Permintaan website spesifik dikirim!\nNama: ${nama}\nEmail: ${email}\nJenis: ${jenis}\nFitur: ${fitur}\nBudget: Rp ${budget}\n\nKami akan menghubungi Anda dalam 24 jam.`);

            this.reset();
        });
    }

    // Event listener untuk contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;

            alert(`Terima kasih ${name}!\n\nPesan Anda telah dikirim dengan detail:\n- Email: ${email}\n- Subjek: ${subject}\n- Pesan: ${message}\n\nKami akan menghubungi Anda dalam 24 jam.`);

            this.reset();
        });
    }

    // Smooth scrolling untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation untuk tombol
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });

    // Mobile menu toggle (untuk responsive)
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.display = 'none';

    // Add hamburger menu untuk mobile
    const navbar = document.querySelector('.navbar .nav-brand');
    if (navbar && window.innerWidth <= 768) {
        navbar.appendChild(hamburger);
        hamburger.style.display = 'block';
        hamburger.style.cursor = 'pointer';
        hamburger.style.fontSize = '1.5rem';
        hamburger.style.padding = '0.5rem';
        hamburger.style.marginLeft = '1rem';

        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});
