//scene
var scene = new THREE.Scene();
var width = window.innerWidth;
var height = window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//object
var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x009900});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

var geometry2 = new THREE.CubeGeometry(1,1,1);
var material2 = new THREE.MeshLambertMaterial( { color: 0x66ffff } );
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(3,0,0);
scene.add(cube2);

//light
var directionalLight = new THREE.DirectionalLight( 0x00ffff, 3 );
directionalLight.position.z = 10;
scene.add( directionalLight );
