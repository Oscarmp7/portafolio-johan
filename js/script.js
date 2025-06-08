document.addEventListener('DOMContentLoaded', () => {

// 1️⃣ CLICK en los links del sidebar (opcional si quieres seguir usándolo)
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // 2️⃣ HOVER videos
  const projectVideos = document.querySelectorAll('.project-banner video');

  projectVideos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  // 3️⃣ SCROLLSPY
  const sections = document.querySelectorAll('section');
  const sidebarLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });

    // HERO Word Focus Loop Animation
    const words = document.querySelectorAll('.hero-focus-text span');
    let currentWord = 0;

    function focusWord(index) {
        words.forEach((word, i) => {
            if (i === index) {
                gsap.to(word, { filter: 'blur(0px)', opacity: 1, duration: 0.6, ease: "power2.out" });
            } else {
                gsap.to(word, { filter: 'blur(4px)', opacity: 0.5, duration: 0.6, ease: "power2.out" });
            }
        });
    }

    function startWordLoop() {
        focusWord(currentWord);
        currentWord = (currentWord + 1) % words.length;
        setTimeout(startWordLoop, 2000);
    }

    startWordLoop();

});
