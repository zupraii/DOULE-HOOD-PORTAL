window.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "https://raw.githubusercontent.com/zupraii/DOULE-HOOD-PORTAL/main/destroy-lonely.mp3";
  audio.autoplay = true;
  audio.loop = true;
  audio.hidden = true;
  document.body.appendChild(audio);

  // Para forzar reproducción después de interacción (por si autoplay falla)
  document.body.addEventListener("click", () => {
    audio.play().catch(() => {
      console.log("Es necesario hacer clic para reproducir el audio");
    });
  });
});
