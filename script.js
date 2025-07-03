

document.addEventListener("DOMContentLoaded", () => {
  const typedElement = document.querySelector(".auto-typed");
  if (typedElement) {
    new Typed(".auto-typed", {
      strings: ["electronics", "fashion", "home essentials", "beauty products"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  const burger = document.getElementById('burger-menu');
  const slideMenu = document.querySelector('.slide-menu');
  const closeBtn = document.getElementById('close-btn');

  if (burger && slideMenu) {
    burger.addEventListener('click', () => {
      slideMenu.classList.toggle('active');
    });
  }

  if (closeBtn && slideMenu) {
    closeBtn.addEventListener('click', () => {
      slideMenu.classList.remove('active');
    });
  }

  const icon = document.getElementById('search-icon');
  const container = document.querySelector('.search-wrapper');

  if (icon && container) {
    icon.addEventListener('click', () => {
      container.classList.toggle('active');
    });
  }

  const navContainer = document.getElementById('container-nav');
  const containerCategory = document.querySelector('.categories-container');

  if (navContainer && containerCategory) {
    navContainer.addEventListener('click', (e) => {
      e.preventDefault();
      const isVisible = containerCategory.style.visibility === 'visible';
      containerCategory.style.visibility = isVisible ? 'hidden' : 'visible';
      containerCategory.style.opacity = isVisible ? '0' : '1';
    });

    document.addEventListener('click', (e) => {
      const isClickInside = containerCategory.contains(e.target);
      const isClickOnNav = navContainer.contains(e.target);

      if (!isClickInside && !isClickOnNav) {
        containerCategory.style.visibility = 'hidden';
        containerCategory.style.opacity = '0';
      }
    });
  }

});