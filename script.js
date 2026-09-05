const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  alert(`This is a UI demo — no backend is connected.\n\nEmail entered: ${email}`);
});

// Rotate a small sample line in the brand signal chip (visual detail only)
const samples = [
  "Reading emotion in Bangla text…",
  "Detecting Banglish sentiment…",
  "Parsing code-mixed input…"
];
let i = 0;
setInterval(() => {
  i = (i + 1) % samples.length;
  document.getElementById("signalText").textContent = samples[i];
}, 3000);