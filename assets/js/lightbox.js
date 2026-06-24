/* ==========================================================
   Image Lightbox
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  if (!lightbox || !lightboxImage) return;

  const images = document.querySelectorAll(".lightbox-trigger");

  images.forEach(image => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
});