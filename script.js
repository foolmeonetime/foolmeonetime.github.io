const links = [
  { url: "https://t.co/YulB6ZVk4h", label: "Pond Fren 1" },
  { url: "https://t.co/QYb9d5C26Y", label: "Pond Fren 2" },
  { url: "https://t.co/9sIzVlRS5f", label: "Pond Fren 3" },
  { url: "https://t.co/DGCirEvozr", label: "Pond Fren 4" },
  { url: "https://t.co/Tit6DuCYOH", label: "Pond Fren 5" },
  { url: "https://t.co/My3eQlKwUz", label: "Pond Fren 6" },
  { url: "https://pond0x.com/swap/solana?ref=JfYMRqw4B3Sj88H8BTB1FUUUjdv2hJZr4hHmGsq3QSn62p2J4XLPmA8G7GCu", label: "Pond Fren 7" },
  { url: "https://t.co/7twAFaWMd8", label: "Pond Fren 8" },
  { url: "https://t.co/xpTNw2Ee2G", label: "Pond Fren 9" },
  { url: "https://t.co/T2ZwW1080e", label: "Pond Fren 10" },
  // Add more links here as needed
];

const generateBtn = document.getElementById("generate-btn");
const linkDisplay = document.getElementById("link-display");

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

  // Add lily animation with random image
  const lily = document.createElement("div");
  lily.classList.add("lily");

  // Randomly choose one of the two images
  const lilyImage = Math.random() > 0.5 ? 'IMG_0280.png' : 'IMG_0283.png';
  lily.style.backgroundImage = `url('${lilyImage}')`;

  document.body.appendChild(lily);
  setTimeout(() => lily.remove(), 10000);
});
