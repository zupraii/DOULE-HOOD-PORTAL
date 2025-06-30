<script>
  const audio = new Audio("https://dl.dropboxusercontent.com/scl/fi/3ko1wwm6htory3jhtnt84/Destroy-Lonely-If-looks-could-kill-x-Red-X-I-think-it-looks-much-cooler-on-me-1.mp3");
  audio.loop = true;
  let playing = false;

  const btn = document.querySelector(".play-button");

  btn.addEventListener("click", (e) => {
    e.preventDefault(); // si quieres evitar que el link se abra al hacer click
    if (!playing) {
      audio.play().then(() => {
        playing = true;
        btn.textContent = "PAUSE";
      }).catch((e) => {
        console.error("No se pudo reproducir el audio:", e);
        alert("Error al reproducir audio. Abre la consola para detalles.");
      });
    } else {
      audio.pause();
      playing = false;
      btn.textContent = "PLAY!";
    }
  });
</script>
