let noScale = 1;

function moveButton() {
  const button = document.getElementById("noBtn");

  noScale -= 0.1;
  if (noScale > 0.4) {
    button.style.transform = "scale(" + noScale + ")";
  }

  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);

  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}

function yesClick() {
  window.location.href = "second.html";
}

/* Heart rain for both pages */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);
