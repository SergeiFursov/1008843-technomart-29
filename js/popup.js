var link = document.querySelector(".contacts-btn"),
  popup = document.querySelector(".modal-feedback"),
  close = document.querySelector(".close-cross"),
  form = popup.querySelector("form"),
  login = popup.querySelector("[name=popup-name]"),
  email = popup.querySelector("[name=popup-mail]");

link.addEventListener("click", function (e) {
  e.preventDefault(),
    popup.classList.add("modal-show"),
    storage ? ((login.value = storage), login.focus()) : email.focus();

}),

  close.addEventListener("click", function (e) {
  e.preventDefault(), popup.classList.remove("modal-show");

}),

  form.addEventListener("submit",function (e) {
    login.value && email.value
    ? isStorageSupport && localStorage.setItem("login", login.value)
      : e.preventDefault();

  })
;

/*var storage = localStorage.getItem("login"),*/
isStorageSupport = !0;
storage = "";

try {
  storage = localStorage.getItem("login");
} catch (e) {
  isStorageSupport = !1;
}
localStorage.setItem("login", " "),
  window.addEventListener("keydown", function(e) {
    27 === e.keyCode &&
    popup.classList.contains("modal-show") &&
    (e.preventDefault(), popup.classList.remove("modal-show"));
  });
