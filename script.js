// Select video and audio elements
const video = document.getElementById('background-video');
const audio = document.getElementById('background-audio');

// Ensure autoplay and loop behavior
window.addEventListener('load', () => {
  // Attempt to play video
  video.play().catch(() => {
    console.log('Autoplay blocked for video, waiting for user interaction.');
  });

  // Attempt to play audio
  audio.play().catch(() => {
    console.log('Autoplay blocked for audio, waiting for user interaction.');
  });
});

// 3D Animation Setup
const canvas = document.getElementById('webgl-canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Create a luminous lily pad
const lilyPadGeometry = new THREE.CircleGeometry(1, 32);
const lilyPadMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.7 });
const lilyPad = new THREE.Mesh(lilyPadGeometry, lilyPadMaterial);
lilyPad.position.set(0, 0, 0);
scene.add(lilyPad);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the lily pad
  lilyPad.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
