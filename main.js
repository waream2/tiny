// Navigation visibility on scroll
const navbar = document.getElementById('navbar');
const logoSection = document.querySelector('.logo-section');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			navbar.classList.remove('visible');
		} else {
			navbar.classList.add('visible');
		}
	});
}, { threshold: 0.3 });

observer.observe(logoSection);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});