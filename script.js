function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + encodeURIComponent(value) +
    ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  var prefix = name + "=";
  var parts = document.cookie.split(";");
  for (var i = 0; i < parts.length; i++) {
    var c = parts[i].trim();
    if (c.indexOf(prefix) === 0) {
      return decodeURIComponent(c.substring(prefix.length));
    }
  }
  return "";
}

function checkCookie() {
  var msg = document.getElementById("message");
  var user = getCookie("username");

  if (user !== "") {
    // Cookie exists: display it with no input box
    msg.textContent = "Welcome back, " + user + "! (value read from your cookie)";
  } else {
    // No cookie yet: pop-up asks for a value, then saves it
    user = prompt("Please enter your name:", "");
    if (user !== null && user.trim() !== "") {
      setCookie("username", user.trim(), 30);
      msg.textContent = "Cookie saved for " + user.trim() + ". Reload this page to see it displayed.";
    } else {
      msg.textContent = "No cookie was saved. Reload the page to try again.";
    }
  }
}

document.getElementById("clearBtn").addEventListener("click", function () {
  setCookie("username", "", -1);
  location.reload();
});

checkCookie();
