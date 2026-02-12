function moveButton() {
  const noBtn = document.getElementById("noBtn");

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}


function yesClick() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:#ffe6f0;
      font-family:Segoe UI;
      ">
      <h1 style="color:#ff2f68;">Yayyy!! ❤️🥰</h1>
      <h2>Happy Valentine’s Day 💕</h2>
    </div>
  `;
}
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "24px";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 500);

