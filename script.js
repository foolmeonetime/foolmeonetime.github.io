const links = [
  { url: "https://t.co/YulB6ZVk4h", label: "Pond Fren 1" },
  { url: "https://t.co/QYb9d5C26Y", label: "Pond Fren 2" },
  // Add more links as needed
];

const generateBtn = document.getElementById("generate-btn");
const linkDisplay = document.getElementById("link-display");
const backgroundAudio = document.getElementById("background-audio");

generateBtn.addEventListener("click", (event) => {
  const randomIndex = Math.floor(Math.random() * links.length);
  const randomLink = links[randomIndex];
  linkDisplay.innerHTML = `Your Pond Fren is: <a class="pond-fren" href="${randomLink.url}" target="_blank">${randomLink.label}</a>`;

  // Create ripple effect
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${event.clientX - 50}px`;
  ripple.style.top = `${event.clientY - 50}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// Play background audio automatically (requires user interaction on some devices)
backgroundAudio.play().catch(() => {
  generateBtn.addEventListener("click", () => {
    backgroundAudio.play();
  });
});
