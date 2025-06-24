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

let lineIndex = 0;
let charIndex = 0;

function typeCharacter() {
  if (lineIndex >= lines.length) return;

  const line = lines[lineIndex];
  if (charIndex < line.length) {
    output.innerHTML += line[charIndex];
    typeSound.currentTime = 0;
    typeSound.play();
    charIndex++;
    setTimeout(typeCharacter, 60);
  } else {
    output.innerHTML += '\n';
    lineIndex++;
    charIndex = 0;
    setTimeout(typeCharacter, 500);
  }

  output.scrollTop = output.scrollHeight;
}

window.onload = typeCharacter;
