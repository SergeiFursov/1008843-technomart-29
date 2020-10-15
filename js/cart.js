let buy = document.querySelector(".popup-item-buy"),
  modalCart = document.querySelector(".modal-cart");
  closerCart = document.querySelector(".close-cart")

buy.addEventListener("click", function (e) {
  e.preventDefault();
  modalCart.classList.add("modal-cart-show");
});

  closerCart.addEventListener("click", function (e) {
    e.preventDefault();
    modalCart.classList.remove("modal-cart-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
