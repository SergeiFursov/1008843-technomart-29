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
