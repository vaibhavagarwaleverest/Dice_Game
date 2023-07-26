var p1 = "";
var p2 = "";

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("submit-start");
  if (el) {
    el.addEventListener("click", onsubmit, false);
  }
});
function onsubmit() {
  let player1 = document.getElementById("player-1").value;
  let player2 = document.getElementById("player-2").value;
  localStorage.setItem("p1", player1);
  localStorage.setItem("p2", player2);
}
window.onload = function () {
  if (document.getElementById("p1") != null)
    document.getElementById("p1").innerHTML = localStorage.getItem("p1");
  if (document.getElementById("p2") != null)
    document.getElementById("p2").innerHTML = localStorage.getItem("p2");
};
