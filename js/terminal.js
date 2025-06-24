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
let i = 0;

function typeLine() {
  if (i < lines.length) {
    output.innerHTML += lines[i] + "\n";
    output.scrollTop = output.scrollHeight;
    i++;
    setTimeout(typeLine, 1000);
  }
}
window.onload = typeLine;

