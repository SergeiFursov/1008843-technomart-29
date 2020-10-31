// Modal Cart //

let buy = document.querySelectorAll(".popup-item-buy");
const modalCart = document.querySelector(".modal-cart");
const closerCart = document.querySelector(".close-cart");

buy.forEach((elem) => {
  elem.addEventListener('click', () => {
    modalCart.classList.add('modal-cart-show')
  })
});

closerCart.addEventListener("click", function (e) {
  e.preventDefault();
  modalCart.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-cart-show")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-cart-show");
    }
  }
});

// Modal Map //

const linkMap = document.querySelector(".map"),
  map = document.querySelector(".map-popup"),
  closerMap = document.querySelector(".close-map");


linkMap.addEventListener("click", function (e) {
  e.preventDefault();
  map.classList.add("map-show");
});

closerMap.addEventListener("click", function (e) {
  e.preventDefault();
  map.classList.remove("map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("map-show")) {
      evt.preventDefault();
      map.classList.remove("map-show");
    }
  }
});

// Service-slider //

let sliderIndex = 1;

const buttons = document.querySelectorAll('.service-btn');
const items = document.querySelectorAll('.services-promo-item');

viewItems(sliderIndex);

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].onclick = function () {
    for (let i = 0; i < buttons.length; ++i) {
      buttons[i].classList.remove('current');
    }
    for (let i = 0; i < items.length; ++i) {
      items[i].classList.remove('services-promo-current');
    }
    buttons[i].classList.add('current');
    items[i].classList.add('services-promo-current');
  };
}

function plusItems(n) {
  viewItems((sliderIndex +=n));
}

function currentSlide(n) {
  viewItems((sliderIndex = n));
}

function viewItems(n) {
  if (n > items.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = items.length;
  }
  for (i = 0; i < items.length; ++i) {
    items[i].classList.remove('services-promo-current');
  }
  for (i = 0; i < buttons.length; ++i) {
    buttons[i].classList.remove('current');
  }
  items[sliderIndex - 1].classList.add('services-promo-current');
  buttons[sliderIndex - 1].classList.add('current');
}

// Promo-slider //

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

// Modal Feedback //

const link = document.querySelector(".contacts-btn");
const popup = document.querySelector(".modal-feedback");
const closer = document.querySelector(".close-cross");
const login = popup.querySelector("[name=popup-name]");
const email = popup.querySelector("[name=popup-mail]")
const form = popup.querySelector("form");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

closer.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});



