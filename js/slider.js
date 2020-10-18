let slideIndex = 2;

const btnPrev = document.querySelector(".controls-arrow-left");
const btnNext = document.querySelector(".controls-arrow-right");

const indicators = document.querySelectorAll(".slider-controls button");
const slides = document.querySelectorAll(".slider-item");

showSlides(slideIndex);

btnPrev.onclick = () => {
  plusSlides(-1);
};
btnNext.onclick = () => {
  plusSlides(1);
};

for (let i = 0; i < indicators.length; i++) {
  indicators[i].onclick = function () {
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("current");
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slide-current");
    }
    indicators[i].classList.add("current");
    slides[i].classList.add("slide-current");
  };
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide-current");
  }
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("current");
  }
  slides[slideIndex - 1].classList.add("slide-current");
  indicators[slideIndex - 1].classList.add("current");
}
