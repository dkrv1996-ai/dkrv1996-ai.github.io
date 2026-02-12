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

window.addEventListener("load", function() {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    console.log("Autoplay blocked by browser");
  });
});


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
/* ---------------- TYPING EFFECT ---------------- */

window.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typingText");

  if (textElement) {
    const message = "I love you baccha 🥰💖";
    let index = 0;

    function typeEffect() {
      if (index < message.length) {
        textElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
      }
    }

    typeEffect();
  }
});


/* ---------------- SPARKLE BLAST ---------------- */

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
}

document.addEventListener("click", function (e) {
  for (let i = 0; i < 15; i++) {
    createSparkle(
      e.clientX + (Math.random() - 0.5) * 40,
      e.clientY + (Math.random() - 0.5) * 40
    );
  }
});


