console.log('this works')
// import the THREE library
import * as THREE from 'three';

// get a reference to the scene-container element that will eventually hold the scene
const container = document.querySelector('#scene-container');

// global variables
const WIDTH = container.clientWidth
const HEIGHT = container.clientHeight

// create a scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#233143');

// create a camera
const FOV = 75
const ASPECT = WIDTH / HEIGHT
const NEAR = 0.1
const FAR = 100

// camera
const camera = new THREE.PerspectiveCamera( FOV, ASPECT, NEAR, FAR );
camera.position.set(0, 0, 10);

// create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap

// set the size
renderer.setSize( WIDTH, HEIGHT );

// add automatically created canvas element to the webpage
container.appendChild( renderer.domElement );

// create the geometry
const geometry = new THREE.BoxGeometry(4,4,4); 
// create the material
const material = new THREE.MeshLambertMaterial({ color: 'yellow' }); 
// create the mesh
const cube = new THREE.Mesh( geometry, material );
// set position
cube.position.set(0,0,0)
// pass mesh to the scene
scene.add(cube)

const tgeometry = new THREE.TetrahedronGeometry(4,0); 
// create the material
const tmaterial = new THREE.MeshLambertMaterial({ color: 'blue' }); 
// create the mesh
const tetrahedron = new THREE.Mesh( tgeometry, tmaterial );
// set position
tetrahedron.position.set(8,0,0)
// pass mesh to the scene
scene.add(tetrahedron)

const sgeometry = new THREE.SphereGeometry(3.5,16,16); 
// create the material
const smaterial = new THREE.MeshLambertMaterial({ color: 'red' }); 
// create the mesh
const sphere = new THREE.Mesh( sgeometry, smaterial );
// set position
sphere.position.set(0,-8,0)
// pass mesh to the scene
scene.add(sphere)

const togeometry = new THREE.TorusKnotGeometry( 2.5, 0.5, 100, 16 ); 
const tomaterial = new THREE.MeshLambertMaterial( { color: 'pink' } ); 
const torusKnot = new THREE.Mesh( togeometry, tomaterial ); 
torusKnot.position.set(8,-8,0)
scene.add(torusKnot);

cube.receiveShadow = true;
tetrahedron.receiveShadow = true;
sphere.receiveShadow = true;
material.receiveShadow = true;
tmaterial.receiveShadow = true;
smaterial.receiveShadow = true;


import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// orbit controls allow us to pan with the mouse
const controls = new OrbitControls( camera, renderer.domElement );

// Create an ambient light
const ambientLight = new THREE.AmbientLight('white', 0.5)
// add it to the scene
scene.add(ambientLight)
ambientLight.castShadow = true; // 启用阴影投射
ambientLight.receiveShadow = true; // 启用阴影接收

// Create a directional light
const directionalLight = new THREE.DirectionalLight('white', 10)
// add it to the scene
scene.add(directionalLight)
// move the light right, up, and towards us
directionalLight.position.set(10, 10, 10)
directionalLight.castShadow = true; // 启用阴影投射
directionalLight.receiveShadow = true; // 启用阴影接收


//animation loop
const animate = () => {
    requestAnimationFrame(animate)
  
    // increase the cube's rotation each frame
    cube.rotation.x += 0.8
    cube.rotation.y += 0.8
    cube.rotation.z += 0
    tetrahedron.rotation.x += 0.2
    tetrahedron.rotation.y += 0.2
    tetrahedron.rotation.z += 0
    sphere.rotation.x += 0.1
    sphere.rotation.y += 0.1
    sphere.rotation.z += 0
    torusKnot.rotation.x += 0.1
    torusKnot.rotation.y += 0.1
    torusKnot.rotation.z += 0

    renderer.render(scene, camera);
  }
  animate()

