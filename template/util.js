function p(v){
	console.log(v);
}

function getImageCube(){
	// var materials = [
	// 	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("./me_avater.jpg")}),
	// 	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("./me_avater.jpg")}),
	// 	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("./me_avater.jpg")}),
	// 	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("./me_avater.jpg")}),
	// 	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("./me_avater.jpg")}),
	// 	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("./me_avater.jpg")})
	// ];
	// var material = new THREE.MeshFaceMaterial();
	// material = new THREE.MeshLambertMaterial( { color: 0xdddddd, wireframe: true } );
	// var geometry = new THREE.CubeGeometry(1,1,1,null,null,null,materials);
	// var mesh = new THREE.Mesh( geometry, material );
	// return mesh;

	var geometry = new THREE.CubeGeometry(1,1,1);
	var material = new THREE.MeshBasicMaterial({color: 0x990000});
	var cube = new THREE.Mesh(geometry, material);
	return cube;
}