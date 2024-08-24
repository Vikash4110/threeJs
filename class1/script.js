console.log(THREE);

const scene = new THREE.Scene();

// Geometry and Material
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "red" });

// Mesh
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Camera
const size = { 
    width: 700, 
    height: 500 
};
const camera = new THREE.PerspectiveCamera(60, size.width / size.height);
camera.position.z = 5; // Positioning the camera
// Renderer
const target = document.querySelector(".wbgl");
const renderer = new THREE.WebGLRenderer({ canvas: target });
renderer.setSize(size.width, size.height);

// Rendering function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate(); // Start the animation loop