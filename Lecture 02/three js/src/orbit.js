import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './style.css'

// ref -> https://threejs.org/docs/?q=orbit#examples/en/controls/OrbitControls

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix() // preserve the cube from squecing
})

// this line should be just above the animate function
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true
controls.dampingFactor = 0.01
// controls.autoRotate = true
controls.autoRotateSpeed = 8
// controls.enableZoom = false

function animate() {
    window.requestAnimationFrame(animate)
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    controls.update(); // we do need to update the controllers and the function updates

    renderer.render(scene, camera);
}

animate();