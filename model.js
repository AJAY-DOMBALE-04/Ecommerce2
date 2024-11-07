const container1 = document.getElementById('virtual-store-container1');
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(75, container1.clientWidth / container1.clientHeight, 0.1, 1000);
const renderer1 = new THREE.WebGLRenderer({ antialias: true });
renderer1.setSize(container1.clientWidth, container1.clientHeight);
renderer1.setClearColor(0xffffff, 1); // This sets the background to white
container1.appendChild(renderer1.domElement);

// Add lighting to the scene
const light1 = new THREE.AmbientLight(0xffffff,1); // Soft white light
scene1.add(light1);

const directionalLight1 = new THREE.DirectionalLight(0x00ff00, 0.5);
directionalLight1.position.set(1, 1, 1);
scene1.add(directionalLight1);
 

const directionalLight2B1 = new THREE.DirectionalLight(0xffffff, 0.5); // Add a second directional light
directionalLight2B1.position.set(-1, -1, 1); // Position it opposite to the first light
scene1.add(directionalLight2B1);

// Adding a point light for more focused lighting
const pointLight1 = new THREE.PointLight(0xffffff, 0.5); // Point light with lower intensity
pointLight1.position.set(2, 2, 2); // Position it close to the model
scene1.add(pointLight1);


// Load the 3D model
const loader1 = new THREE.GLTFLoader();
loader1.load('public/images/ajayiphone.glb', function(gltf) { // Replace 'airpods_max_clone.glb' with your actual model file name
    const ajayiphone= gltf.scene;
    ajayiphone.scale.set(1,2,2);  // Adjust the scale if necessary
    scene1.add(ajayiphone);

    animate();
}, undefined, function(error) {
    console.error('An error occurred while loading the 3D model:', error);
});

camera1.position.set(1, 1, 5); // Position the camera
camera1.lookAt(scene1.position); // Make sure the camera is looking at the scene

const controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);
controls1.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls1.dampingFactor = 0.25;
controls1.enableZoom = true;

// Animation loop
const animate1 = function () {
    requestAnimationFrame(animate1);
    renderer1.render(scene1, camera1);
};

animate1();

window.addEventListener('resize', () => {
    const width = container1.clientWidth;
    const height = container1.clientHeight;

    renderer1.setSize(container1.clientWidth, container1.clientHeight);
    camera1.aspect = width / height;
    camera1.updateProjectionMatrix();
});


const container = document.getElementById('virtual-store-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0xffffff, 1); // This sets the background to white
container.appendChild(renderer.domElement);

// Add lighting to the scene
const light = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0x00ff00, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);



// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load('public/images/apple_vision_pro2.glb', function(gltf) { // Replace 'airpods_max_clone.glb' with your actual model file name
    const apple_vision_pro2 = gltf.scene;
    apple_vision_pro2.scale.set(20,20,20);  // Adjust the scale if necessary
    scene.add(apple_vision_pro2);

    animate();
}, undefined, function(error) {
    console.error('An error occurred while loading the 3D model:', error);
});

camera.position.set(0, 1, 5); // Position the camera
camera.lookAt(scene.position); // Make sure the camera is looking at the scene

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
// });






const container2= document.getElementById('virtual-store-container2');
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, container2.clientWidth / container2.clientHeight, 0.1, 1000);
const  renderer2 = new THREE.WebGLRenderer({ antialias: true });    
renderer2.setSize(container2.clientWidth, container2.clientHeight);   
renderer2.setClearColor(0xffffff, 1); // This sets the background to white
container2.appendChild(renderer2.domElement);

// Add lighting to the scene
const light2 = new THREE.AmbientLight(0xffffff,15); // Soft white light
scene2.add(light2);

const directionalLight2= new THREE.DirectionalLight(0x00ff00, 0.5);
directionalLight2.position.set(1, 1, 1);
scene2.add(directionalLight2);

// Adding another directional light
const directionalLight2B = new THREE.DirectionalLight(0xffffff, 0.5); // Add a second directional light
directionalLight2B.position.set(-1, -1, 1); // Position it opposite to the first light
scene2.add(directionalLight2B);

// Adding a point light for more focused lighting
const pointLight = new THREE.PointLight(0xffffff, 0.5); // Point light with lower intensity
pointLight.position.set(2, 2, 2); // Position it close to the model
scene2.add(pointLight);


// Load the 3D model
const loader2 = new THREE.GLTFLoader();
loader2.load('public/images/apple_watch.glb', function(gltf) { // Replace 'airpods_max_clone.glb' with your actual model file name
    const apple_watch= gltf.scene;
    apple_watch.scale.set(70,70,70);  // Adjust the scale if necessary
    scene2.add(apple_watch);

    animate2();
}, undefined, function(error) {
    console.error('An error occurred while loading the 3D model:', error);
});

camera2.position.set(1, 1, 5); // Position the camera
camera2.lookAt(scene2.position); // Make sure the camera is looking at the scene

const controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
controls2.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls2.dampingFactor = 0.25;
controls2.enableZoom = true;

// Animation loop
const animate2= function () {
    requestAnimationFrame(animate2);
    renderer2.render(scene2, camera2);
};

animate2();

window.addEventListener('resize', () => {
    const width = container2.clientWidth;
    const height = container2.clientHeight;

    renderer2.setSize(container2.clientWidth, container2.clientHeight);
    camera2.aspect = width / height;
    camera2.updateProjectionMatrix();
});




// // // Apple Vision Pro Model
// // const container = document.getElementById('virtual-store-container');
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
// // const renderer = new THREE.WebGLRenderer({ antialias: true });
// // renderer.setSize(container.clientWidth, container.clientHeight);
// // renderer.setClearColor(0xffffff, 1); // White background
// // container.appendChild(renderer.domElement);

// // // Lighting
// // const light = new THREE.AmbientLight(0x404040); // Soft white light
// // scene.add(light);

// // const directionalLight = new THREE.DirectionalLight(0x00ff00, 0.5);
// // directionalLight.position.set(1, 1, 1);
// // scene.add(directionalLight);

// // // Load Apple Vision Pro Model
// // const loader = new THREE.GLTFLoader();
// // loader.load('/images/apple_vision_pro2.glb', function(gltf) {
// //     const model = gltf.scene;
// //     model.scale.set(20, 20, 20);  // Adjust scale
// //     scene.add(model);
// //     animate();
// // }, undefined, function(error) {
// //     console.error('Error loading Apple Vision Pro model:', error);
// // });

// // camera.position.set(0, 1, 5);
// // camera.lookAt(scene.position);

// // const controls = new THREE.OrbitControls(camera, renderer.domElement);
// // controls.enableDamping = true;
// // controls.dampingFactor = 0.25;
// // controls.enableZoom = true;

// // function animate() {
// //     requestAnimationFrame(animate);
// //     renderer.render(scene, camera);
// // }
// // animate();

// // window.addEventListener('resize', () => {
// //     const width = container.clientWidth;
// //     const height = container.clientHeight;
// //     renderer.setSize(width, height);
// //     camera.aspect = width / height;
// //     camera.updateProjectionMatrix();
// // });


// // // iPhone 13 Pro Model
// // const container1 = document.getElementById('virtual-store-container1');
// // const scene1 = new THREE.Scene();
// // const camera1 = new THREE.PerspectiveCamera(75, container1.clientWidth / container1.clientHeight, 0.1, 1000);
// // const renderer1 = new THREE.WebGLRenderer({ antialias: true });
// // renderer1.setSize(container1.clientWidth, container1.clientHeight);
// // renderer1.setClearColor(0xffffff, 1);
// // container1.appendChild(renderer1.domElement);

// // // Lighting
// // const light1 = new THREE.AmbientLight(0xffffff, 1);
// // scene1.add(light1);

// // const directionalLight1 = new THREE.DirectionalLight(0x00ff00, 0.5);
// // directionalLight1.position.set(1, 1, 1);
// // scene1.add(directionalLight1);

// // // Load iPhone 13 Pro Model
// // const loader1 = new THREE.GLTFLoader();
// // loader1.load('/images11/i_phone_12_pro.glb', function(gltf) {
// //     const model = gltf.scene;
// //     model.scale.set(2, 2, 2);
// //     scene1.add(model);
// //     animate1();
// // }, undefined, function(error) {
// //     console.error('Error loading iPhone 13 Pro model:', error);
// // });

// // camera1.position.set(1, 1, 5);
// // camera1.lookAt(scene1.position);

// // const controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);
// // controls1.enableDamping = true;
// // controls1.dampingFactor = 0.25;
// // controls1.enableZoom = true;

// // function animate1() {
// //     requestAnimationFrame(animate1);
// //     renderer1.render(scene1, camera1);
// // }
// // animate1();

// // window.addEventListener('resize', () => {
// //     const width = container1.clientWidth;
// //     const height = container1.clientHeight;
// //     renderer1.setSize(width, height);
// //     camera1.aspect = width / height;
// //     camera1.updateProjectionMatrix();
// // });


// // // Apple Watch Model
// // const container2 = document.getElementById('virtual-store-container2');
// // const scene2 = new THREE.Scene();
// // const camera2 = new THREE.PerspectiveCamera(75, container2.clientWidth / container2.clientHeight, 0.1, 1000);
// // const renderer2 = new THREE.WebGLRenderer({ antialias: true });
// // renderer2.setSize(container2.clientWidth, container2.clientHeight);
// // renderer2.setClearColor(0xffffff, 1);
// // container2.appendChild(renderer2.domElement);

// // // Lighting
// // const light2 = new THREE.AmbientLight(0xffffff, 1);
// // scene2.add(light2);

// // const directionalLight2 = new THREE.DirectionalLight(0x00ff00, 0.5);
// // directionalLight2.position.set(1, 1, 1);
// // scene2.add(directionalLight2);

// // // Load Apple Watch Model
// // const loader2 = new THREE.GLTFLoader();
// // loader2.load('/images/apple_watch.glb', function(gltf) {
// //     const model = gltf.scene;
// //     model.scale.set(70, 70, 70);
// //     scene2.add(model);
// //     animate2();
// // }, undefined, function(error) {
// //     console.error('Error loading Apple Watch model:', error);
// // });

// // camera2.position.set(1, 1, 5);
// // camera2.lookAt(scene2.position);

// // const controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
// // controls2.enableDamping = true;
// // controls2.dampingFactor = 0.25;
// // controls2.enableZoom = true;

// // function animate2() {
// //     requestAnimationFrame(animate2);
// //     renderer2.render(scene2, camera2);
// // }
// // animate2();

// // window.addEventListener('resize', () => {
// //     const width = container2.clientWidth;
// //     const height = container2.clientHeight;
// //     renderer2.setSize(width, height);
// //     camera2.aspect = width / height;
// //     camera2.updateProjectionMatrix();
// // });








