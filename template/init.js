//scene
var scene = new THREE.Scene();
var width = window.innerWidth;
var height = window.innerHeight;

//camera
var camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
camera.position.x = 5;
camera.position.y = 5;
camera.position.z = -5;

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

//object
var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x009900});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.lookAt(cube.position);

var geometry2 = new THREE.CubeGeometry(1,1,1);
var material2 = new THREE.MeshLambertMaterial( { color: 0x66ffff } );
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(3,0,0);
scene.add(cube2);

//light
var directionalLight = new THREE.DirectionalLight( 0xeeeeee, 10 );
directionalLight.position.z = 10;
scene.add( directionalLight );

//axis
var lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });
var lineGeometry = new THREE.Geometry();
    lineGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
    lineGeometry.vertices.push(new THREE.Vector3(10, 0, 0));
var line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

var line2 = getAxis();
//scene.add(line2);

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

//plane
 var map1 = THREE.ImageUtils.loadTexture( 'sand.jpg' );
map1.wrapS = map1.wrapT = THREE.RepeatWrapping;
map1.repeat.set( 4, 4 );
var sandWidth = 8;
var sandGeometry = new THREE.PlaneGeometry(sandWidth, sandWidth, sandWidth, sandWidth);

sand = new THREE.Mesh(
    sandGeometry,
    new THREE.MeshLambertMaterial( { map: map1 } )
);
sand.rotation.x = Math.PI / -2;
sand.castShadow = true;
sand.receiveShadow = true;
scene.add(sand);
