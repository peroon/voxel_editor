//scene
var scene = new THREE.Scene();
var WIDTH= window.innerWidth;
var HEIGHT= window.innerHeight;

//camera
var camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, 0.1, 1000);
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = -5;

//light
var lightColor = 0xeeeeee;

//directional light
var directionalLight = new THREE.DirectionalLight(lightColor, 2 );
directionalLight.position.z = 10;
scene.add(directionalLight);

//ambient light
var ambientLight = new THREE.AmbientLight(lightColor);
scene.add(ambientLight);

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

//cube1
var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x009900});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.lookAt(cube.position);

//cube2
var geometry2 = new THREE.CubeGeometry(1,1,1);
var material2 = new THREE.MeshLambertMaterial( { color: 0x66ffff } );
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(3,0,0);
scene.add(cube2);

//image cube
var imageCube = getImageCube();
imageCube.position.set(-3,0,0);
scene.add(imageCube);

//grid
var gridWidth = 128;
var grid = new THREE.Mesh(
	new THREE.PlaneGeometry( 128, 128, 128, 128 ),
	new THREE.MeshLambertMaterial( { color: 0xdddddd, wireframe: true } )
);
grid.rotation.x = Math.PI / -2;
scene.add(grid);

//axis
var orig = new THREE.Vector3(0, 0, 0);
var lineX = getLine(orig, new THREE.Vector3(10, 0, 0), 0xff0000);
var lineY = getLine(orig, new THREE.Vector3(0, 10, 0), 0x00ff00);
var lineZ = getLine(orig, new THREE.Vector3(0, 0, 10), 0x0000ff);
scene.add(lineX);
scene.add(lineY);
scene.add(lineZ);

//fog
var fogColor = 0xAA9966;
scene.fog = new THREE.FogExp2( fogColor, 0.015 );

//sand plane
var sand = getSand();
// sand.position.y -= 1;
scene.add(sand);
