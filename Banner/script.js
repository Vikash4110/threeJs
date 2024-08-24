// script.js

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Create a simple robot using basic geometries
const robotGroup = new THREE.Group();

const bodyGeometry = new THREE.BoxGeometry(1, 2, 1);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
robotGroup.add(body);

const headGeometry = new THREE.BoxGeometry(1, 1, 1);
const headMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1.5;
robotGroup.add(head);

const legGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
const legMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const leg1 = new THREE.Mesh(legGeometry, legMaterial);
leg1.position.set(-0.25, -1.5, 0);
robotGroup.add(leg1);

const leg2 = new THREE.Mesh(legGeometry, legMaterial);
leg2.position.set(0.25, -1.5, 0);
robotGroup.add(leg2);

scene.add(robotGroup);

// Set the camera position
camera.position.z = 5;

// Initial position of the robot and banner
robotGroup.position.x = 10;
let banner = document.getElementById('banner');
let bannerLeft = window.innerWidth;

// Animation loop
let bannerMoved = false;

function animate() {
    requestAnimationFrame(animate);

    // Move the robot and banner from right to left
    if (robotGroup.position.x > -10 && !bannerMoved) {
        robotGroup.position.x -= 0.05;
        bannerLeft -= 1.5;
        banner.style.left = bannerLeft + 'px';

        // Stop the banner and robot after they move off-screen
        if (bannerLeft <= -window.innerWidth) {
            bannerMoved = true;
        }
    }

    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
