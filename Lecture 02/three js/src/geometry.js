import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Create renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create box geometry and material
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });

// side: THREE.DoubleSide  -> this method show the model from other sides too

// Create mesh
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position camera
camera.position.z = 5;
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const controller = new OrbitControls(camera, renderer.domElement)
controller.autoRotate = false
controller.autoRotateSpeed = 8
controller.enableDamping = true


// Animation loop
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    controller.update();
    renderer.render(scene, camera);
}
animate();