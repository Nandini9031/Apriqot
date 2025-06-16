window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!firstName || !lastName || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for reaching out! We’ll be in touch soon.");
  this.reset();
});

function validateEmail(email) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return re.test(email.toLowerCase());
}

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function() {
  
  const script = document.createElement("script");
  script.src = "https://unpkg.com/lottie-web@5.7.6/build/player/lottie.min.js";
  script.onload = initAnimations;
  script.onerror = function() {
    console.error("Failed to load Lottie library");
  };
  document.body.appendChild(script);
});

function initAnimations() {
  console.log("Initializing animations...");
  
  loadAnimation('demographic-modeling', 'https://assets1.lottiefiles.com/packages/lf20_UJNc2t.json');
  loadAnimation('micro-simulations', 'https://assets1.lottiefiles.com/private_files/lf30_WdTEui.json');
  loadAnimation('location-optimization', 'https://assets1.lottiefiles.com/packages/lf20_poqwqbr4.json');
  loadAnimation('public-health', 'https://assets1.lottiefiles.com/packages/lf20_5tl1xxnz.json');
  loadAnimation('survey-design', 'https://assets1.lottiefiles.com/packages/lf20_xlkxtmul.json');
  
  loadAnimation('community-health', 'https://assets1.lottiefiles.com/packages/lf20_5tl1xxnz.json');
  loadAnimation('resource-allocation', 'https://assets1.lottiefiles.com/packages/lf20_poqwqbr4.json');
  loadAnimation('policy-analysis', 'https://assets1.lottiefiles.com/packages/lf20_ksxcbrct.json');
  loadAnimation('program-eligibility', 'https://assets1.lottiefiles.com/packages/lf20_q77qtrkj.json');
  loadAnimation('environmental-impact', 'https://assets1.lottiefiles.com/packages/lf20_rhnmhzpj.json');
  
  loadAnimation('alzheimers-project', 'https://assets1.lottiefiles.com/packages/lf20_q5qvqtnr.json');
  loadAnimation('cancer-screening', 'https://assets1.lottiefiles.com/packages/lf20_tbjbblvg.json');
  loadAnimation('food-insecurity', 'https://assets1.lottiefiles.com/packages/lf20_s4tubvxf.json');
  loadAnimation('youth-health', 'https://assets1.lottiefiles.com/packages/lf20_q77qtrkj.json');
  loadAnimation('medical-baseline', 'https://assets1.lottiefiles.com/packages/lf20_5tl1xxnz.json');
}

function loadAnimation(containerId, path) {
  const container = document.getElementById(containerId);
  if (container) {
    console.log(`Loading animation for ${containerId}`);
    try {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
      });
    } catch (error) {
      console.error(`Error loading animation for ${containerId}:`, error);
      
      container.style.backgroundColor = '#ffa50033';
      container.innerHTML = '<i class="fas fa-chart-line" style="font-size: 2rem; color: #ffa500;"></i>';
    }
  } else {
    console.error(`Container not found: ${containerId}`);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const trailer = document.createElement('div');
  trailer.classList.add('cursor-trailer');
  document.body.appendChild(trailer);
  
  let mouseX = 0;
  let mouseY = 0;
  let trailerX = 0;
  let trailerY = 0;
  
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateTrailer() {
    const speed = 0.2;
    trailerX += (mouseX - trailerX) * speed;
    trailerY += (mouseY - trailerY) * speed;
    
    trailer.style.left = `${trailerX}px`;
    trailer.style.top = `${trailerY}px`;
    
    requestAnimationFrame(animateTrailer);
  }
  
  animateTrailer();
  
  const interactiveElements = document.querySelectorAll('a, button, .btn, .border');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      trailer.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      trailer.classList.remove('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  
  const sections = document.querySelectorAll('section, header');
  sections.forEach(section => {
    section.style.display = 'block';
  });
  
  checkScroll();
  
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.style.display = 'flex';
    heroSection.style.minHeight = '100vh';
  }
});

function checkScroll() {
  const elements = document.querySelectorAll('.fade-up');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < windowHeight * 0.85) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

window.addEventListener('scroll', function() {
  const heroSection = document.querySelector('.hero-section');
  const scrollPosition = window.scrollY;
  
  if (heroSection) {
    heroSection.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.border');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      const rotateX = (mouseY / (cardRect.height / 2)) * -5;
      const rotateY = (mouseX / (cardRect.width / 2)) * 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const teamMembers = document.querySelectorAll('.team-member, .advisor');
  
  teamMembers.forEach(member => {
    
    const randomRotation = (Math.random() * 6) - 3; 
    member.querySelector('img').style.transform = `rotate(${randomRotation}deg)`;
    
    member.addEventListener('mouseenter', () => {
      if (window.AudioContext || window.webkitAudioContext) {
        try {
          const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          const oscillator = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          
          oscillator.type = 'sine';
          oscillator.frequency.value = 440 + Math.random() * 100;
          gainNode.gain.value = 0.05;
          
          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          
          oscillator.start();
          
          setTimeout(() => {
            oscillator.stop();
          }, 100);
        } catch (e) {
          console.log('Audio context not supported or blocked');
        }
      }
    });
  });
  
  const teamLinks = document.querySelectorAll('.team-link, .advisor-link');
  teamLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Profile clicked:', this.querySelector('h5').textContent);
      
      if (!this.href.includes('.html')) {
        e.preventDefault();
        alert('Profile page for ' + this.querySelector('h5').textContent + ' coming soon!');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  
  const heroSection = document.querySelector('.hero-section');
  const aboutSection = document.querySelector('#about');
  const teamSection = document.querySelector('#team');
  const advisorsSection = document.querySelector('#advisors');
  
  if (heroSection) {
    heroSection.style.backgroundSize = '400% 400%';
  }
  
  if (aboutSection) {
    aboutSection.style.backgroundSize = '400% 400%';
  }
  
  if (teamSection) {
    teamSection.style.backgroundSize = '400% 400%';
  }
  
  if (advisorsSection) {
    advisorsSection.style.backgroundSize = '400% 400%';
  }
  
  const sections = [heroSection, aboutSection, teamSection, advisorsSection];
  sections.forEach(section => {
    if (section) {
      section.addEventListener('mouseenter', function() {
        this.style.animationDuration = '12s';
      });
      
      section.addEventListener('mouseleave', function() {
        this.style.animationDuration = '15s';
      });
    }
  });
  
  const teamMembers = document.querySelectorAll('.team-member, .advisor');
  
  teamMembers.forEach(member => {
    const imgContainer = member.querySelector('.img-container');
    const img = member.querySelector('.team-img, .advisor-img');
    const overlay = member.querySelector('.overlay');
    
    if (imgContainer && img && overlay) {
      overlay.style.position = 'absolute';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.borderRadius = '50%';
      overlay.style.backgroundColor = 'rgba(255, 165, 0, 0.7)';
      
      imgContainer.addEventListener('mouseenter', function() {
        overlay.style.opacity = '1';
        img.style.transform = 'scale(1.05) rotate(3deg)';
      });
      
      imgContainer.addEventListener('mouseleave', function() {
        overlay.style.opacity = '0';
        img.style.transform = 'scale(1) rotate(0deg)';
      });
    }
  });
});

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  const heroSection = document.querySelector('.hero-section');
  const aboutSection = document.querySelector('#about');
  const teamSection = document.querySelector('#team');
  const advisorsSection = document.querySelector('#advisors');
  
  if (heroSection && isElementInView(heroSection)) {
    const scrollPercentage = getScrollPercentage(heroSection);
    heroSection.style.backgroundPosition = `${50 + scrollPercentage * 5}% ${50 + scrollPercentage * 5}%`;
  }
  
  if (aboutSection && isElementInView(aboutSection)) {
    const scrollPercentage = getScrollPercentage(aboutSection);
    aboutSection.style.backgroundPosition = `${50 + scrollPercentage * 5}% ${50 - scrollPercentage * 5}%`;
  }
  
  if (teamSection && isElementInView(teamSection)) {
    const scrollPercentage = getScrollPercentage(teamSection);
    teamSection.style.backgroundPosition = `${50 - scrollPercentage * 5}% ${50 + scrollPercentage * 5}%`;
  }
  
  if (advisorsSection && isElementInView(advisorsSection)) {
    const scrollPercentage = getScrollPercentage(advisorsSection);
    advisorsSection.style.backgroundPosition = `${50 - scrollPercentage * 5}% ${50 - scrollPercentage * 5}%`;
  }
});

function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function getScrollPercentage(element) {
  const rect = element.getBoundingClientRect();
  return (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
}

document.addEventListener('DOMContentLoaded', function() {
  const whyApriqotSection = document.getElementById('why-apriqot');
  const apricotOverlay = document.querySelector('.apricot-bg-overlay');
  
  if (whyApriqotSection && apricotOverlay) {
    
    for (let i = 0; i < 20; i++) {
      const apricot = document.createElement('div');
      apricot.className = 'floating-apricot';
      apricot.style.position = 'absolute';
      apricot.style.width = '50px';
      apricot.style.height = '50px';
      apricot.style.borderRadius = '50%';
      apricot.style.backgroundColor = '#FFA500';
      apricot.style.opacity = '0.15';
      apricot.style.zIndex = '0';
      
      apricot.style.left = Math.random() * 100 + '%';
      apricot.style.top = Math.random() * 100 + '%';
      
      const size = 30 + Math.random() * 50;
      apricot.style.width = size + 'px';
      apricot.style.height = size + 'px';
      
      if (Math.random() > 0.5) {
        const leaf = document.createElement('div');
        leaf.style.position = 'absolute';
        leaf.style.width = size/2 + 'px';
        leaf.style.height = size/3 + 'px';
        leaf.style.backgroundColor = '#72A603';
        leaf.style.borderRadius = '50% 50% 50% 0';
        leaf.style.top = '-' + size/4 + 'px';
        leaf.style.right = '-' + size/6 + 'px';
        leaf.style.transform = 'rotate(-30deg)';
        leaf.style.opacity = '0.2';
        apricot.appendChild(leaf);
      }
      
      apricot.style.animation = `float-random ${5 + Math.random() * 10}s ease-in-out infinite`;
      apricot.style.animationDelay = Math.random() * 5 + 's';
      
      whyApriqotSection.appendChild(apricot);
    }
    
    if (!document.querySelector('#float-random-keyframes')) {
      const style = document.createElement('style');
      style.id = 'float-random-keyframes';
      style.textContent = `
        @keyframes float-random {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(10deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `;
      document.head.appendChild(style);
    }
    
    window.addEventListener('scroll', function() {
      if (isElementInView(whyApriqotSection)) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * 0.1;
        
        const apricots = whyApriqotSection.querySelectorAll('.floating-apricot');
        apricots.forEach((apricot, index) => {
          const factor = 0.05 + (index % 5) * 0.02;
          apricot.style.transform = `translateY(${offset * factor}px)`;
        });
      }
    });
  }
});
