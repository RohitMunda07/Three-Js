const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(box, material);
scene.add(cube);

// ----------------------------camera alignment-------------------------------------------------------
camera.position.z = 5;
// as the value increases the cube moves backwart and vice-versa for -ve value

camera.position.x = 0;
// as the value increases the camera shifts to right and vice-versa for -ve value

// ----------------------------cube alignment-------------------------------------------------------
// cube.rotation.x = 4; // put a stick on the smae axis to understand rotation & same goes for y and z axis
// Math.PI -> 180 deg
// Math.PI * 2 -> 360 deg
// Math.PI / 2 -> 90 deg
// Math.PI / 4 -> 45 deg

// cube.scale.x = 1 // same goes for y and z axis

const canvas = document.querySelector("#draw")
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera)

const clock = new THREE.Clock();
function animate() {
    renderer.render(scene, camera)
    cube.rotation.x += 0.01; // it will cause issue depending on computer's capability of fps
    cube.rotation.x = clock.getElapsedTime()  // solution (* number) can be used to increce the animation
    window.requestAnimationFrame(animate)
}

animate();