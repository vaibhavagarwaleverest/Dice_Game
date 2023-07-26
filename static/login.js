document.getElementById("submit").addEventListener("click", onsubmit);

function onsubmit(eve) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username.length < 1) {
    document.getElementById("inc").innerHTML = "Username is required";
    eve.preventDefault();
  }

  console.log(username);
  console.log(password);
}
