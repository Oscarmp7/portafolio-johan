// ==============================
// GSAP + ScrollTrigger Animations
// ==============================

// 1️⃣ Registramos el plugin
gsap.registerPlugin(ScrollTrigger);

// 2️⃣ About section
gsap.from('.about-section h2', {
  scrollTrigger: '.about-section h2',
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out'
});

gsap.from('.about-section p, .about-section li', {
  scrollTrigger: '.about-section',
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.out'
});

// 3️⃣ Contact section
gsap.from('.contact-section h2', {
  scrollTrigger: '.contact-section h2',
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out'
});

gsap.from('.contact-section form, .contact-section .contact-info', {
  scrollTrigger: '.contact-section',
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power2.out'
});

// 4️⃣ Projects banners
gsap.from('.projects-carousel .project-banner', {
  scrollTrigger: '.projects-carousel',
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out'
});
