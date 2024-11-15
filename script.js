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
  { url: "https://t.co/W0C9wDTOPr", label: "Pond Fren 23" },
  { url: "https://t.co/ivhXjyp2Ff", label: "Pond Fren 24" },
  { url: "https://t.co/n2WB1RgKlN", label: "Pond Fren 25" },
  { url: "https://t.co/44562FjhN3", label: "Pond Fren 26" },
  { url: "https://t.co/pf0iZFmKMc", label: "Pond Fren 27" },
  { url: "https://t.co/0hOKgRBcVG", label: "Pond Fren 28" },
  { url: "https://t.co/e03gITZcR7", label: "Pond Fren 29" },
  { url: "https://t.co/ZSiQPqIw44", label: "Pond Fren 30" },
  { url: "https://t.co/x1lLzgIimW", label: "Pond Fren 31" },
  { url: "https://t.co/8iFJ9j1jik", label: "Pond Fren 32" },
  { url: "https://pond0x.com/swap/solana?ref=Jfd3Sb4swYvct8pxobGNXEKuofuDVUm53m9a34F57oC8RoHaVvfxdLYiswFq", label: "Pond Fren 33" },
  { url: "https://t.co/3QAtldySYD", label: "Pond Fren 34" },
  { url: "https://t.co/9Pm4CI9tZH", label: "Pond Fren 35" },
  { url: "https://t.co/RH3dvMwDyn", label: "Pond Fren 36" },
  { url: "https://t.co/H40wGQclbZ", label: "Pond Fren 37" },
  { url: "https://t.co/8EyOilSAMX", label: "Pond Fren 38" },
  { url: "https://t.co/1TZPgrRn0B", label: "Pond Fren 39" },
  { url: "https://t.co/Bbt2oobqEp", label: "Pond Fren 40" },
  { url: "https://t.co/dqxbnsm7Ov", label: "Pond Fren 41" },
  { url: "https://t.co/d9x1rfofeF", label: "Pond Fren 42" },
  { url: "https://t.co/gxqBO2TfOx", label: "Pond Fren 43" },
  { url: "https://t.co/idMt7sgyBx", label: "Pond Fren 44" },
  { url: "https://t.co/geqDLVBM85", label: "Pond Fren 45" },
  { url: "https://t.co/yJcSdYCuLs", label: "Pond Fren 46" },
  { url: "https://t.co/ZYqvrjyxIu", label: "Pond Fren 47" },
  { url: "https://t.co/SY630v9xIc", label: "Pond Fren 48" },
  { url: "https://t.co/2CXMxU0Zua", label: "Pond Fren 49" },
  { url: "https://t.co/RaWWBkDusM", label: "Pond Fren 50" },
  { url: "https://t.co/rQJkqIzXss", label: "Pond Fren 51" },
  { url: "https://t.co/A3MIUyAlRr", label: "Pond Fren 52" },
  { url: "https://t.co/0nLLgopfWE", label: "Pond Fren 53" },
  { url: "https://t.co/IhYUJAtB92", label: "Pond Fren 54" },
  { url: "https://t.co/N9fnH1HAHm", label: "Pond Fren 55" },
  { url: "https://t.co/t167uTfC0V", label: "Pond Fren 56" },
  { url: "https://t.co/L00E9Aluk7", label: "Pond Fren 57" },
  { url: "https://t.co/uOg1ygbroT", label: "Pond Fren 58" },
  { url: "https://t.co/YOQXrfJAma", label: "Pond Fren 59" },
  { url: "https://t.co/nRGWpmmTtt", label: "Pond Fren 60" },
  { url: "https://t.co/OngJbEVoEg", label: "Pond Fren 61" },
  { url: "https://t.co/EKUc0NifAB", label: "Pond Fren 62" },
  { url: "https://t.co/Gs8DVyd6Zu", label: "Pond Fren 63" },
  { url: "https://t.co/5LLOuGBwDJ", label: "Pond Fren 64" },
  { url: "https://pond0x.com/swap/solana?ref=QDNk5TQjywRLqWsLAnHYuGTQnpnorm2XTTXbvCcp5cNc8PDQGnm5FZjMUeKz", label: "Pond Fren 65" },
  { url: "https://t.co/DNvkXDjHCt", label: "Pond Fren 66" },
  { url: "https://t.co/xo9rOxTthQ", label: "Pond Fren 67" },
  { url: "https://t.co/pxSfLN49zS", label: "Pond Fren 68" },
  { url: "https://t.co/j7SIjs3OGZ", label: "Pond Fren 69" },
  { url: "https://t.co/HnhmIhnSPO", label: "Pond Fren 70" },
  { url: "https://t.co/XraigDwZJp", label: "Pond Fren 71" },
  { url: "https://t.co/RFV5Z0fSxV", label: "Pond Fren 72" },
  { url: "https://t.co/Pg0ZTqkmuZ", label: "Pond Fren 73" },
  { url: "https://t.co/Zi5G2RUq5E", label: "Pond Fren 74" },
  { url: "https://t.co/JQj13dMNqa", label: "Pond Fren 75" },
  { url: "https://t.co/Z5FFsnwn8F", label: "Pond Fren 76" },
  { url: "https://t.co/5Vw5wzRSzp", label: "Pond Fren 77" },
  { url: "https://t.co/Tx3hW5RULb", label: "Pond Fren 78" },
  { url: "https://t.co/y4KvlzQuPC", label: "Pond Fren 79" },
  { url: "https://t.co/Lr7pFuhW9I", label: "Pond Fren 80" },
  { url: "https://t.co/5OKiJ8WvD9", label: "Pond Fren 81" },
  { url: "https://t.co/UCIJRE0qOp", label: "Pond Fren 82" },
  { url: "https://t.co/s7C2pD9My7", label: "Pond Fren 83" },
  { url: "https://t.co/TyKp9yH4Sx", label: "Pond Fren 84" },
  { url: "https://t.co/JkIZJgAmsC", label: "Pond Fren 85" },
  { url: "https://t.co/M3ZgIbSEok", label: "Pond Fren 86" },
  { url: "https://t.co/wvD93hFw8A", label: "Pond Fren 87" },
  { url: "https://t.co/uubiNQUEii", label: "Pond Fren 88" },
  { url: "https://t.co/bq06IIneh1", label: "Pond Fren 89" },
  { url: "https://t.co/162HtTQsBa", label: "Pond Fren 90" },
  { url: "https://t.co/UBfgNisoo9", label: "Pond Fren 91" },
  { url: "https://t.co/U6PAOpUPVx", label: "Pond Fren 92" },
  { url: "https://t.co/kygZ7OiAcTn", label: "Pond Fren 93" },
  { url: "https://t.co/FvUryvCeHG", label: "Pond Fren 94" },
  { url: "https://t.co/3hWWwBNhSI", label: "Pond Fren 95" },
  { url: "https://t.co/EGVicJ1yfG", label: "Pond Fren 96" },
  { url: "https://t.co/WmhcluQRtj", label: "Pond Fren 97" },
  { url: "https://t.co/9YxL87YI7y", label: "Pond Fren 98" },
  { url: "https://t.co/A1KvNSeMd0", label: "Pond Fren 99" },
  { url: "https://t.co/ZxNy126Bo0", label: "Pond Fren 100" },
  { url: "https://t.co/Ow3khj00ew", label: "Pond Fren 101" },
  { url: "https://t.co/EC7KtEKMFQ", label: "Pond Fren 102" },
  { url: "https://t.co/oIDfYkSSR2", label: "Pond Fren 103" },
  { url: "https://t.co/HMqvEsQ4ZI", label: "Pond Fren 104" },
  { url: "https://t.co/fRnL5EXO9Z", label: "Pond Fren 105" },
  { url: "https://t.co/IechWGKpet", label: "Pond Fren 106" },
  { url: "https://t.co/BDrCCU3r2A", label: "Pond Fren 107" },
  { url: "https://t.co/paNlzZFTQV", label: "Pond Fren 108" },
  { url: "https://t.co/uVHQjg2tiQ", label: "Pond Fren 109" },
  { url: "https://pond0x.com/swap/solana?ref=KLfc17WAJMCEuSPpZkcYFqNuPCEUDbPW9ojMmmXeaexVRYtMM4X9sDg2114p", label: "Pond Fren 110" },
  { url: "https://t.co/pnUxN0rnZ4", label: "Pond Fren 111" },
  { url: "https://t.co/GIWs0u8PFD", label: "Pond Fren 112" },
  { url: "https://t.co/BFLvuGTh7R", label: "Pond Fren 113" },
  { url: "https://t.co/9j0xRwdXdl", label: "Pond Fren 114" },
  { url: "https://www.pond0x.com/swap/solana?ref=JyNHVKLxj5oU96HYSCPc6W6Ree6VRHhnqafzqd2EUYgqeJA9NeLyTH688aqA", label: "Pond Fren 115" },
  { url: "https://t.co/lFPjo5o6qq", label: "Pond Fren 116" },
  { url: "https://t.co/NvwBvDW2IF", label: "Pond Fren 117" },
  { url: "https://t.co/Ct5iXistHX", label: "Pond Fren 118" },
  { url: "https://t.co/OZdM6UqWw6", label: "Pond Fren 119" },
  { url: "https://t.co/YRJxCxqEuk", label: "Pond Fren 120" },
  { url: "https://t.co/orNbfEkxHn", label: "Pond Fren 121" },
  { url: "https://t.co/xmk8UNrama", label: "Pond Fren 122" },
  { url: "https://t.co/1EE5XxVlXo", label: "Pond Fren 123" },
  { url: "https://t.co/wH4ywGVDGN", label: "Pond Fren 124" },
  { url: "https://t.co/lgEIgNPXnh", label: "Pond Fren 125" },
  { url: "https://t.co/BYJPAVSmRN", label: "Pond Fren 126" },
  { url: "https://t.co/wXo4XOgh1T", label: "Pond Fren 127" },
  { url: "https://t.co/eWiTpViFK3", label: "Pond Fren 128" },
  { url: "https://t.co/wxeqlDVslx", label: "Pond Fren 129" },
  { url: "https://t.co/yGQftK9nfe", label: "Pond Fren 130" },
  { url: "https://t.co/kLhXZZzNap", label: "Pond Fren 131" },
  { url: "https://t.co/zMsSkhHhe4", label: "Pond Fren 132" },
  { url: "https://t.co/rr6XGlcIB2", label: "Pond Fren 133" },
  { url: "https://t.co/MLbCimE7ck", label: "Pond Fren 134" },
  { url: "https://t.co/HFfGA9zUGs", label: "Pond Fren 135" },
  { url: "https://t.co/nBrHPX7C4F", label: "Pond Fren 136" },
  { url: "https://t.co/GzJ6cX0giz", label: "Pond Fren 137" },
  { url: "https://t.co/ecNj8IM3M5", label: "Pond Fren 138" },
  { url: "https://t.co/Q9Kie22Vti", label: "Pond Fren 139" },
  { url: "https://t.co/GWdyQYUI4k", label: "Pond Fren 140" },
  { url: "https://t.co/0xLSMmHFlZ", label: "Pond Fren 141" },
  { url: "https://t.co/bEbLptDWvk", label: "Pond Fren 142" },
  { url: "https://t.co/kIvOKgHCoS", label: "Pond Fren 143" },
  { url: "https://t.co/JLy8Nr1Pq7", label: "Pond Fren 144" },
  { url: "https://t.co/SaGUNdnvwU", label: "Pond Fren 145" },
  { url: "https://t.co/uvmwo4G6H5", label: "Pond Fren 146" },
  { url: "https://t.co/FiUbhfDb1J", label: "Pond Fren 147" },
  { url: "https://www.pond0x.com/swap/solana?ref=KKd5FSK8wtagoSvzvkicAJgqrnxQumcyX8vfCgWymVz18TGtFtMm55t6WNxd", label: "Pond Fren 148" },
  { url: "https://t.co/eyhHYxJ0ju", label: "Pond Fren 149" },
  { url: "https://t.co/KfHUVwWgnW", label: "Pond Fren 150" },
  { url: "https://t.co/EQlJG323PC", label: "Pond Fren 151" },
  { url: "https://t.co/3WnrHPUfs8", label: "Pond Fren 152" },
  { url: "https://t.co/D9qOwCUu4S", label: "Pond Fren 153" },
  { url: "https://t.co/vWC0OdvDcI", label: "Pond Fren 154" },
  { url: "https://t.co/DnM65rrKvR", label: "Pond Fren 155" },
  { url: "https://t.co/gTLkNxHbTx", label: "Pond Fren 156" },
  { url: "https://t.co/7r9KnpoZzD", label: "Pond Fren 157" },
  { url: "https://t.co/JcJRJKDo4h", label: "Pond Fren 158" },
  { url: "https://t.co/DLKg20lCSV", label: "Pond Fren 159" },
  { url: "https://t.co/TbMm1DqGAo", label: "Pond Fren 160" },
  { url: "https://t.co/XQ8OfgPSjH", label: "Pond Fren 161" },
  { url: "https://pond0x.com/swap/solana?ref=JzAuvAgJVBMQKTVFgSXaVCpGZp2RBDMW7LFwT8wJsNC8jKCiu85vLb4GqNPg", label: "Pond Fren Link 162" },
  { url: "https://t.co/4v7qhqj5k0", label: "Pond Fren 163" },
  { url: "https://t.co/yieYHTsbks", label: "Pond Fren 164" },
  { url: "https://t.co/N1SzvS7Y7x", label: "Pond Fren 165" },
  { url: "https://t.co/QreJ47TVPJ", label: "Pond Fren 166" },
  { url: "https://t.co/mQYZc5tPdK", label: "Pond Fren 167" },
  { url: "https://t.co/b6d7JnQn1R", label: "Pond Fren 168" },
  { url: "https://t.co/dAw7LNJuE9", label: "Pond Fren 169" },
  { url: "https://www.pond0x.com/swap/solana?ref=KKd5FSK8wtagoSvzvkicAJgqrnxQumcyX8vfCgWymVz18TGtFtMm55t6WNxd", label: "Pond Fren 170" },
  { url: "https://t.co/oXLaQQWR9Q", label: "Pond Fren 171" }
  ];

const generateBtn = document.getElementById("generate-btn");
const linkDisplay = document.getElementById("link-display");
const backgroundAudio = document.getElementById("background-audio");
const backgroundVideo = document.getElementById("background-video");
const pauseBtn = document.getElementById("pause-btn");

// Generate Button Click Event
generateBtn.addEventListener("click", (event) => {
    // Generate a random link
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    linkDisplay.innerHTML = `<a class="pond-fren" href="${randomLink.url}" target="_blank">${randomLink.label}</a>`;

    // Play the background video
    if (backgroundVideo.paused) {
        backgroundVideo.play().catch((error) => {
            console.error('Video autoplay failed:', error);
        });
    }

    // Create ripple effect
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${event.clientX - 50}px`;
    ripple.style.top = `${event.clientY - 50}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // Play the background audio
    if (backgroundAudio.paused) {
        backgroundAudio.play().catch((error) => {
            console.error('Audio autoplay failed:', error);
        });
    }
});

// Pause/Play Button for Audio
pauseBtn.addEventListener("click", () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        pauseBtn.textContent = "⏸️";
        pauseBtn.setAttribute("aria-label", "Pause audio");
    } else {
        backgroundAudio.pause();
        pauseBtn.textContent = "▶️";
        pauseBtn.setAttribute("aria-label", "Play audio");
    }
});
