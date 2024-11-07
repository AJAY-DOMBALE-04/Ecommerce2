// //Import the THREE.js library
// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// // To allow for the camera to move around the scene
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// // To allow for importing the .gltf file
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// //Create a Three.JS Scene
// const scene = new THREE.Scene();
// //create a new camera with positions and angles
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// //Keep track of the mouse position, so we can make the eye move
// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// //Keep the 3D object on a global variable so we can access it later
// let object;

// //OrbitControls allow the camera to move around the scene
// let controls;

// //Set which object to render
// let objToRender = 'iphone';

// //Instantiate a loader for the .gltf file
// const loader = new GLTFLoader();

// //Load the file
// loader.load(
//   `models/${objToRender}/scene.gltf`,
//   function (gltf) {
//     //If the file is loaded, add it to the scene
//     object = gltf.scene;
//     scene.add(object);
//   },
//   function (xhr) {
//     //While it is loading, log the progress
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//     //If there is an error, log it
//     console.error(error);
//   }
// );

// //Instantiate a new renderer and set its size
// const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
// renderer.setSize(window.innerWidth, window.innerHeight);

// //Add the renderer to the DOM
// document.getElementById("virtual-store-container").appendChild(renderer.domElement);

// //Set how far the camera will be from the 3D model
// camera.position.z = objToRender === "dino" ? 55 : 150;

// //Add lights to the scene, so we can actually see the 3D model
// const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
// topLight.position.set(900, 900, 900) //top-left-ish
// topLight.castShadow = true;
// scene.add(topLight);

// const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 10: 30);
// scene.add(ambientLight);

// //This adds controls to the camera, so we can rotate / zoom it with the mouse
// if (objToRender === "dino") {
//   controls = new OrbitControls(camera, renderer.domElement);
// }

// //Render the scene
// function animate() {
//   requestAnimationFrame(animate);
//   //Here we could add some code to update the scene, adding some automatic movement

//   //Make the eye move
//   if (object && objToRender === "iphone") {
//     //I've played with the constants here until it looked good 
//     object.rotation.y = -3 + mouseX / window.innerWidth * 3;
//     object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
//   }
//   renderer.render(scene, camera);
// }

// //Add a listener to the window, so we can resize the window and the camera
// window.addEventListener("resize", function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// //add mouse position listener, so we can make the eye move
// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// }

// //Start the 3D rendering
// animate();


// // Import the THREE.js library
// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// // To allow for the camera to move around the scene
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// // To allow for importing the .gltf file
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// // Create a Three.JS Scene
// const scene = new THREE.Scene();
// // Create a new camera with positions and angles
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// // Keep track of the mouse position
// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// // Keep the 3D object on a global variable so we can access it later
// let object;

// // OrbitControls allow the camera to move around the scene
// let controls;

// // Set which object to render
// let objToRender = 'iphone';

// // Instantiate a loader for the .gltf file
// const loader = new GLTFLoader();

// // Load the file
// loader.load(
//   `models/${objToRender}/scene.gltf`,
//   function (gltf) {
//     // If the file is loaded, add it to the scene
//     object = gltf.scene;
//     scene.add(object);
//   },
//   function (xhr) {
//     // While it is loading, log the progress
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//     // If there is an error, log it
//     console.error(error);
//   }
// );

// // Instantiate a new renderer and set its size
// const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Add the renderer to the DOM
// document.getElementById("virtual-store-container").appendChild(renderer.domElement);

// // Set how far the camera will be from the 3D model
// camera.position.z = 140;

// // Add lights to the scene, so we can actually see the 3D model
// const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
// topLight.position.set(200, 200, 200); // Top-left-ish
// topLight.castShadow = true;
// scene.add(topLight);

// const ambientLight = new THREE.AmbientLight(0x333333, 40);
// scene.add(ambientLight);

// // This adds controls to the camera, so we can rotate/zoom it with the mouse
// controls = new OrbitControls(camera, renderer.domElement);

// // Variables to track mouse movement state
// let isMouseOverContainer = false;

// // Render the scene
// function animate() {
//   requestAnimationFrame(animate);
  
//   // Make the object rotate only if the mouse is over the container
//   if (isMouseOverContainer && object) {
//     object.rotation.y += 0.01; // Adjust the rotation speed as needed
//   }

//   renderer.render(scene, camera);
// }

// // Add event listeners to track mouse enter and leave events on the container
// const container = document.getElementById("virtual-store-container");
// container.addEventListener("mouseenter", () => {
//   isMouseOverContainer = true;
// });

// container.addEventListener("mouseleave", () => {
//   isMouseOverContainer = false;
// });

// // Add a listener to the window, so we can resize the window and the camera
// window.addEventListener("resize", function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Start the 3D rendering
// animate();



import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
        import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
        import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

        // Function to cre
        function create3DModel(containerId, modelPath, cameraPosition = { x: 0, y: 0, z: 150 }, modelPosition = { x: 0, y: 0, z: 0 }) {
            const container = document.getElementById(containerId);
        
            // Scene, Camera, and Renderer
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z); // Set custom camera position
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);
        
            // Lights
            const light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(200, 200, 200);
            scene.add(light);
            scene.add(new THREE.AmbientLight(0x333333, 40));
        
            // Load the 3D Model
            const loader = new GLTFLoader();
            let model;
            loader.load(modelPath, (gltf) => {
                model = gltf.scene;
                
                // Set model position
                model.position.set(modelPosition.x, modelPosition.y, modelPosition.z); // Adjust model position here
        
                // Optionally scale the model
                model.scale.set(1, 1, 1); // Adjust scaling if needed
        
                scene.add(model);
            }, undefined, (error) => {
                console.error('Error loading model:', error);
            });
        
            // Orbit controls
            const controls = new OrbitControls(camera, renderer.domElement);
        
            // Track mouse hover state
            let isMouseOver = false;
            container.addEventListener("mouseenter", () => isMouseOver = true);
            container.addEventListener("mouseleave", () => isMouseOver = false);
        
            // Render loop
            function animate() {
                requestAnimationFrame(animate);
                if (model && isMouseOver) {
                    model.rotation.y += 0.01; // Adjust rotation speed as needed
                }
                renderer.render(scene, camera);
            }
            animate();
        
            // Handle window resize
            window.addEventListener("resize", () => {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        }
        

        // Load different models in each container
       // Load different models in each container with custom positions
create3DModel("virtual-store-container", "models/iphone/scene.gltf", { x: 0, y: 0, z: 200 }, { x: 0, y: -10, z: 0 });
create3DModel("virtual-store-container1", "models/ajay1/scene.gltf", { x: 0, y: 20, z: 250 }, { x: 0, y: -5, z: 0 });
create3DModel("virtual-store-container2", "models/ajay1/scene.gltf", { x: -50, y: 10, z: 150 }, { x: 0, y: 0, z: 0 });


