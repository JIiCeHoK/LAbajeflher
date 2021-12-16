//import * as THREE from "https://cdn.skypack.dev/three@0.135.0";
//import * as THREE from "/node_modules/three/build/three.module.js";

//import { GLTFLoader } from "./node_modules/three/examples/jsm/loaders/GLTFLoader";

var scene = new THREE.Scene();



const gltfLoader = new THREE.GLTFLoader();

var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

gltfLoader.load(
    '/GLTF/LPSP_SmallFrigate.gltf',
    (gltf) => {
        scene.add(gltf.scene);
    }
);

camera.lookAt(0, 0, 0);

var spotLight = new THREE.SpotLight(0xeeeece);
spotLight.position.set(1000, 1000, 1000);
scene.add(spotLight);

var spotLight2 = new THREE.SpotLight(0xffffff);
spotLight2.position.set(-200, -200, -200);
scene.add(spotLight2);

// var geometry = new THREE.SphereGeometry(1, 32, 32);
// var material = new THREE.MeshPhongMaterial({
//     color: 0xdaa520,
//     specular: 0xbcbcbc,
// });
// var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);
camera.position.z = 8;
// camera.position.y = 50;

function render() {
    requestAnimationFrame(render);
    scene.rotateY(0.01);
    // gltf.scene.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
render();
