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


