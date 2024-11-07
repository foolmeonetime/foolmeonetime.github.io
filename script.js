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
  { url: "https://t.co/emnpRd9Xxd", label: "Pond Fren 11" },
  { url: "https://t.co/bb2SG5yC3m", label: "Pond Fren 12" },
  { url: "https://t.co/bXWhMOtgeT", label: "Pond Fren 13" },
  { url: "https://t.co/zftfSyMtb3", label: "Pond Fren 14" },
  { url: "https://t.co/DfqcoNpyXO", label: "Pond Fren 15" },
  { url: "https://t.co/DmlGgFz7TF", label: "Pond Fren 16" },
  { url: "https://t.co/h3I5ohX98x", label: "Pond Fren 17" },
  { url: "https://t.co/gEkFU73S3a", label: "Pond Fren 18" },
  { url: "https://t.co/jiWaHq9cuI", label: "Pond Fren 19" },
  { url: "https://t.co/jZtg5CCrMx", label: "Pond Fren 20" },
  { url: "https://pond0x.com/swap/solana?ref=QAjZffNGKxyvAdQGzBCvEMD4FbAVcCuUYssPBv3NCpz4194aoXTVHvpbhpfM", label: "Pond Fren 21" },
  { url: "https://t.co/gCs78hKqnc", label: "Pond Fren 22" },
  { url: "https://t.co/YulB6ZVk4h", label: "Pond Fren 23" },
  { url: "https://t.co/W0C9wDTOPr", label: "Pond Fren 24" },
  { url: "https://t.co/ivhXjyp2Ff", label: "Pond Fren 25" },
  { url: "https://t.co/n2WB1RgKlN", label: "Pond Fren 26" },
  { url: "https://t.co/44562FjhN3", label: "Pond Fren 27" },
  { url: "https://t.co/pf0iZFmKMc", label: "Pond Fren 28" },
  { url: "https://t.co/0hOKgRBcVG", label: "Pond Fren 29" },
  { url: "https://t.co/e03gITZcR7", label: "Pond Fren 30" },
  { url: "https://t.co/7twAFaWMd8", label: "Pond Fren 31" },
  { url: "https://t.co/ZSiQPqIw44", label: "Pond Fren 32" },
  { url: "https://t.co/x1lLzgIimW", label: "Pond Fren 33" },
  { url: "https://t.co/8iFJ9j1jik", label: "Pond Fren 34" },
  { url: "https://pond0x.com/swap/solana?ref=Jfd3Sb4swYvct8pxobGNXEKuofuDVUm53m9a34F57oC8RoHaVvfxdLYiswFq", label: "Pond Fren 35" },
  { url: "https://t.co/3QAtldySYD", label: "Pond Fren 36" },
  { url: "https://t.co/9Pm4CI9tZH", label: "Pond Fren 37" },
  { url: "https://t.co/RH3dvMwDyn", label: "Pond Fren 38" },
  { url: "https://t.co/H40wGQclbZ", label: "Pond Fren 39" },
  { url: "https://t.co/8EyOilSAMX", label: "Pond Fren 40" },
  { url: "https://t.co/1TZPgrRn0B", label: "Pond Fren 41" },
  { url: "https://t.co/Bbt2oobqEp", label: "Pond Fren 42" },
  { url: "https://t.co/dqxbnsm7Ov", label: "Pond Fren 43" },
  { url: "https://t.co/d9x1rfofeF", label: "Pond Fren 44" },
  { url: "https://t.co/gxqBO2TfOx", label: "Pond Fren 45" },
  { url: "https://t.co/idMt7sgyBx", label: "Pond Fren 46" },
  { url: "https://t.co/geqDLVBM85", label: "Pond Fren 47" },
  { url: "https://t.co/yJcSdYCuLs", label: "Pond Fren 48" },
  { url: "https://t.co/ZYqvrjyxIu", label: "Pond Fren 49" },
  { url: "https://t.co/SY630v9xIc", label: "Pond Fren 50" },
  { url: "https://t.co/2CXMxU0Zua", label: "Pond Fren 51" },
  { url: "https://t.co/RaWWBkDusM", label: "Pond Fren 52" },
  { url: "https://t.co/rQJkqIzXss", label: "Pond Fren 53" },
  { url: "https://t.co/A3MIUyAlRr", label: "Pond Fren 54" },
  { url: "https://t.co/0nLLgopfWE", label: "Pond Fren 55" },
  { url: "https://t.co/IhYUJAtB92", label: "Pond Fren 56" },
  { url: "https://t.co/N9fnH1HAHm", label: "Pond Fren 57" },
  { url: "https://t.co/t167uTfC0V", label: "Pond Fren 58" },
  { url: "https://t.co/L00E9Aluk7", label: "Pond Fren 59" },
  { url: "https://t.co/uOg1ygbroT", label: "Pond Fren 60" },
  { url: "https://t.co/YOQXrfJAma", label: "Pond Fren 61" },
  { url: "https://t.co/nRGWpmmTtt", label: "Pond Fren 62" },
  { url: "https://t.co/9sIzVlRS5f", label: "Pond Fren 63" },
  { url: "https://t.co/xavwdX3tdJ", label: "Pond Fren 64" },
  { url: "https://t.co/6qoirogfuZ", label: "Pond Fren 65" },
  { url: "https://t.co/WS6Z35J2au", label: "Pond Fren 66" },
  { url: "https://t.co/dyvkUMB0ls", label: "Pond Fren 67" },
  { url: "https://t.co/MdKCnRhetL", label: "Pond Fren 68" },
  { url: "https://t.co/OngJbEVoEg", label: "Pond Fren 69" },
  { url: "https://t.co/EKUc0NifAB", label: "Pond Fren 70" },
  { url: "https://t.co/Gs8DVyd6Zu", label: "Pond Fren 71" },
  { url: "https://t.co/5LLOuGBwDJ", label: "Pond Fren 72" },
  { url: "https://pond0x.com/swap/solana?ref=QDNk5TQjywRLqWsLAnHYuGTQnpnorm2XTTXbvCcp5cNc8PDQGnm5FZjMUeKz", label: "Pond Fren 73" },
  { url: "https://t.co/DNvkXDjHCt", label: "Pond Fren 74" },
  { url: "https://t.co/xo9rOxTthQ", label: "Pond Fren 75" },
  { url: "https://t.co/pxSfLN49zS", label: "Pond Fren 76" },
  { url: "https://t.co/ShZzOQEt0h", label: "Pond Fren 77" },
  { url: "https://t.co/joUQcCwtWX", label: "Pond Fren 78" },
  { url: "https://t.co/cCW2KUPTWX", label: "Pond Fren 79" },
  { url: "https://t.co/j7SIjs3OGZ", label: "Pond Fren 80" },
  { url: "https://t.co/3c6s7oUWKN", label: "Pond Fren 81" },
  { url: "https://t.co/ayPcrk8axs", label: "Pond Fren 82" },
  { url: "https://t.co/HnhmIhnSPO", label: "Pond Fren 83" },
  { url: "https://t.co/T8QjAFh5WX", label: "Pond Fren 84" },
  { url: "https://t.co/KFPW3s2lhI", label: "Pond Fren 85" },
  { url: "https://t.co/iYtGs5DXDq", label: "Pond Fren 86" },
  { url: "https://t.co/XraigDwZJp", label: "Pond Fren 87" },
  { url: "https://t.co/RFV5Z0fSxV", label: "Pond Fren 88" }
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
