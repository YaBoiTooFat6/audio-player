const songs = [
  { title: "Black Sabbath - After Forever", src: "audio/song1.mp3" },
  { title: "Faded  sans version", src: "audio/song2.mp3" },
  { title: "Cicha noc na gitarze", src: "audio/song3.mp3" }
];

const playlist = document.getElementById("playlist");

let currentAudio = null;
let currentButton = null;
let currentEq = null;

songs.forEach(song => {
  const li = document.createElement("li");

  const trackInfo = document.createElement("div");
  trackInfo.className = "track-info";

  const title = document.createElement("span");
  title.textContent = song.title;

  const btn = document.createElement("button");
  btn.textContent = "▶";

  const audio = new Audio(song.src);

  btn.addEventListener("click", () => {


    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentButton.textContent = "▶";
      currentEq?.remove();
    }

    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸";

      const eq = document.createElement("img");
      eq.src = "assets/equalizer.gif";
      eq.className = "equalizer";

      trackInfo.insertBefore(eq, title);

      currentAudio = audio;
      currentButton = btn;
      currentEq = eq;
    } else {
      audio.pause();
      btn.textContent = "▶";
      currentEq?.remove();
    }
  });

  trackInfo.appendChild(title);
  li.append(trackInfo, btn);
  playlist.appendChild(li);
});
