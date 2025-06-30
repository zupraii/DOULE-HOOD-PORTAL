window.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "https://raw.githubusercontent.com/zupraii/DOULE-HOOD-PORTAL/main/Destroy%20Lonely%20-%20If%20looks%20could%20kill%20x%20Red%20X%20'I%20think%20it%20looks%20much%20cooler%20on%20me'.mp3";
  audio.autoplay = true;
  audio.loop = true;
  audio.hidden = true;
  document.body.appendChild(audio);
});
