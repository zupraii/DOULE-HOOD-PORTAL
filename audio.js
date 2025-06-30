window.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "https://dl.dropboxusercontent.com/scl/fi/3ko1wwm6htory3jhtnt84/Destroy-Lonely-If-looks-could-kill-x-Red-X-I-think-it-looks-much-cooler-on-me-1.mp3";
  audio.loop = true;
  audio.hidden = true;
  document.body.appendChild(audio);

  // Crear botón para controlar música
  const btn = document.createElement("button");
  btn.textContent = "Play Music";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px 20px";
  btn.style.backgroundColor = "#27ae60";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
  btn.style.fontWeight = "700";
  btn.style.fontSize = "1rem";
  btn.style.zIndex = "10000";
  document.body.appendChild(btn);

  let playing = false;

  btn.addEventListener("click", () => {
    if (!playing) {
      audio.play().then(() => {
        playing = true;
        btn.textContent = "Pause Music";
        btn.style.backgroundColor = "#2980b9";
      }).catch(() => {
        console.log("Haz clic para activar el audio");
      });
    } else {
      audio.pause();
      playing = false;
      btn.textContent = "Play Music";
      btn.style.backgroundColor = "#27ae60";
    }
  });
});
