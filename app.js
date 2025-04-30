
document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const zoomIns = document.querySelectorAll('.zoom-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.1 });

    fadeIns.forEach(el => observer.observe(el));
    zoomIns.forEach(el => observer.observe(el));
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Votre demande de réservation a été soumise. Vous serez redirigé vers le paiement.");
    window.location.href = "https://moncashbutton.digicelgroup.com/";
});