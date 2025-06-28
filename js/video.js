const output = document.getElementById("output");
const typeSound = document.getElementById("type-sound");
const videoContainer = document.getElementById("video-container");

const lines = [
  "Initiating birthday surprise video...",
  "Buffering video stream...",
  "Done."
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLines() {
  for (const line of lines) {
    for (const char of line) {
      if (char !== ' ') {
        typeSound.currentTime = 0;
        typeSound.play();
      }
      output.innerHTML += char;
      output.scrollTop = output.scrollHeight;
      await sleep(60);
    }
    output.innerHTML += '\n';
    await sleep(500);
  }
  await sleep(500);
  videoContainer.style.display = "block";
}

window.onload = typeLines;
