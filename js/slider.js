var slides = document.querySelectorAll('.slider-list .slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide slider-current';
}
