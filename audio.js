window.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "https://dl.dropboxusercontent.com/scl/fi/3ko1wwm6htory3jhtnt84/Destroy-Lonely-If-looks-could-kill-x-Red-X-I-think-it-looks-much-cooler-on-me-1.mp3";
  audio.autoplay = true;
  audio.loop = true;
  audio.hidden = true;
  document.body.appendChild(audio);

  document.body.addEventListener("click", () => {
    audio.play().catch(() => {
      console.log("Haz clic para activar el audio");
    });
  });
});
