// Loader countdown
let count = 100;
const countdown = document.getElementById('countdown');
const fill = document.getElementById('bar-fill');
const loaderInterval = setInterval(() => {
  if (count <= 0) {
    clearInterval(loaderInterval);
    document.getElementById('custom-loader').style.display = 'none';
    return;
  }
  count--;
  countdown.textContent = count.toString().padStart(3, '0');
  fill.style.width = (100 - count) + '%';
}, 40);

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Ripple effect
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    this.appendChild(ripple);
    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    setTimeout(() => ripple.remove(), 600);
  });
});

// Hero Slider
const heroImages = [
  'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
  'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg'
];
const heroTexts = [
  "Elevate Your Style", "Unleash Your Fashion"
];
let currentImage = 0;
const heroSlider = document.getElementById('hero-slider');
function changeHeroBackground() {
  heroSlider.style.backgroundImage = `url('${heroImages[currentImage]}')`;
  heroSlider.textContent = heroTexts[currentImage];
  currentImage = (currentImage + 1) % heroImages.length;
}
setInterval(changeHeroBackground, 5000);
changeHeroBackground();

// Image Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('slider-dots');
let currentSlide = 0;
slides.forEach((_, idx) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(idx));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dots span');
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000);
showSlide(currentSlide);

// Product Popup
function showPopup(title, description) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('productModal').style.display = 'block';
}
function closePopup() {
  document.getElementById('productModal').style.display = 'none';
}
window.onclick = function(event) {
  const modal = document.getElementById('productModal');
  if (event.target === modal) closePopup();
};
