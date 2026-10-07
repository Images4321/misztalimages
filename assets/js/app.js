/* ==========================================================
   Global Site App Logic
   - Mobile menu
   - Back to top
   - Parallax
   - Image protection
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initBackToTop();
  initParallax();
  initImageProtection();
});


/* ------------------------------------------
   MOBILE MENU
------------------------------------------ */

function initMobileMenu() {
  const menuButton = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}


/* ------------------------------------------
   BACK TO TOP BUTTON
------------------------------------------ */

function initBackToTop() {
  const button = document.getElementById("backToTop");

  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* ------------------------------------------
   PARALLAX HERO
------------------------------------------ */

function initParallax() {
  const hero = document.querySelector(".parallax");

  if (!hero) return;

  window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = `${offset * 0.4}px`;
  });
}


/* ------------------------------------------
   IMAGE PROTECTION
   Prevent casual right-click saving
   and dragging images to the desktop
------------------------------------------ */

function initImageProtection() {
  document.querySelectorAll("img").forEach(image => {

    // Disable right-click context menu on images
    image.addEventListener("contextmenu", event => {
      event.preventDefault();
    });

    // Disable dragging images
    image.addEventListener("dragstart", event => {
      event.preventDefault();
    });

  });
}