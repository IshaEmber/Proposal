
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.transition = "top 0.5s, left 0.5s, background 0.5s";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.background = "#f78fb3"; // Add a cute color change
}
const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
