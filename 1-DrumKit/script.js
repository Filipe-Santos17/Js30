const keys = [...document.querySelectorAll(".keys .key")];

function playMusic({ code }) {
  const [key] = keys.filter((el) => el.dataset.key === code);
  const audio = document.querySelector(`audio[data-key="${code}"]`);

  if (key && audio) {
    key.classList.add("playing");

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => key.classList.remove("playing"), 70);
  }
}

window.addEventListener("keydown", playMusic);
