const output = document.getElementById("output");
const typeSound = document.getElementById("type-sound");
const bgMusic = document.getElementById("bg-music");

const lines = [
  "Accessing system...",
  "Establishing secure connection...",
  "Decrypting birthday data...",
  "System integrity: OK",
  "",
  "Preparing next phase..."
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
  await sleep(1000);
  window.location.href = "message.html";
}

window.onload = () => {
  document.body.addEventListener('click', () => {
    output.innerHTML = '';
    bgMusic.volume = 0.5;
    bgMusic.play();
    typeLines();
  }, { once: true });
};
