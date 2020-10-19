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
