const lyrics = [
  "Touch my body tender",
  "'Cause the feeling makes me weak",
  "Kicking off the covers",
  "I see the ceiling while you're looking down at me",
  "",
  "How can we go back to being friends",
  "When we just shared a bed?",
  "How can you look at me and pretend",
  "I'm someone you've never met?",
  "",
  "It was last December",
  "You were layin' on my chest",
  "I still remember",
  "I was scared to take a breath",
  "Didn't want you to move your head",
  "",
  "How can we go back to being friends",
  "When we just shared a bed? (Yeah)",
  "How can you look at me and pretend",
  "I'm someone you've never met?",
  "",
  "The devil in your eyes",
  "Won't deny the lies you've sold",
  "I'm holding on too tight",
  "While you let go",
  "This is casual",
  "",
  "How can we go back to being friends",
  "When we just shared a bed? (Yeah)",
  "How can you look at me and pretend",
  "I'm someone you've never met?",
  "",
  "How can we go back to being friends",
  "When we just shared a bed? (Yeah)",
  "How can you look at me and pretend",
  "I'm someone you've never met?",
  "",
  "I'm someone you've never met (Yeah)"
];

let lineIndex = 0;
let intervalId = null;
let stopped = false;

function startLyrics() {
  document.getElementById("startBtn").style.display = "none"; // sembunyikan tombol mulai
  document.getElementById("stopBtn").style.display = "block"; // tampilkan tombol stop

  stopped = false;
  lineIndex = 0;
  nextLine();
}

function stopLyrics() {
  stopped = true;
  clearInterval(intervalId); // hentikan pengetikan baris sekarang
  document.getElementById("lyrics").textContent = ""; // kosongkan layar
  document.getElementById("stopBtn").style.display = "none"; // sembunyikan tombol stop
  document.getElementById("startBtn").style.display = "block";
}

function nextLine() {
  if (lineIndex >= lyrics.length) {
  lineIndex = 0; // mulai lagi dari awal
  }

  const line = lyrics[lineIndex];
  const lyricsDiv = document.getElementById("lyrics");
  lyricsDiv.textContent = "";

  let charIndex = 0;
  intervalId = setInterval(() => {
    if (stopped) {
      clearInterval(intervalId);
      return;
    }

    if (charIndex < line.length) {
      lyricsDiv.textContent += line[charIndex];
      charIndex++;
    } else {
      clearInterval(intervalId);
      lineIndex++;
      setTimeout(nextLine, 1000);
    }
  }, 50);
}