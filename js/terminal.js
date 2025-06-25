const lines = [
  "Accessing system...",
  "Establishing secure connection...",
  "Decrypting message...",
  "Compiling birthday protocols...",
  "",
  ">>> Happy Birthday Dad 🎉",
  "",
  "Wishing you strength, health, and joy on your special day.",
  "You're my inspiration, my support system, and my superhero.",
  "Thank you for always being there for me — through every storm and every success.",
  "",
  "-- Your Loving Child ❤️"
];

const output = document.getElementById("output");
const typeSound = document.getElementById("type-sound");
const bgMusic = document.getElementById("bg-music");

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
}

window.onload = () => {
  document.body.addEventListener('click', () => {
    output.innerHTML = ''; // Clear click message
    bgMusic.volume = 0.5;
    bgMusic.play();
    typeLines();
  }, { once: true });
};
