const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
let current = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    current = index;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImg() {
  current = (current + 1) % images.length;
  lightboxImg.src = images[current].src;
}

function prevImg() {
  current = (current - 1 + images.length) % images.length;
  lightboxImg.src = images[current].src;
}

function filterGallery(category) {
  images.forEach(img => {
    if (category === 'all') {
      img.style.display = 'block';
    } else {
      if (img.classList.contains(category)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    }
  });
}
