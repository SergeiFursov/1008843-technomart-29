var lin = document.querySelector(".map"),
  map = document.querySelector(".map-popup"),
  close = map.querySelector(".close-cross");


lin.addEventListener("click", function(e) {
  e.preventDefault(),
    map.classList.add("map-show");
}),

  close.addEventListener("click", function(e) {
    e.preventDefault(), map.classList.remove("map-show");
  });
