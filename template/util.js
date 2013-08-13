function p(v){
	console.log(v);
}

function getImageCube(){
	var path = './me_avater.jpg';
	var materials = [
       new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(path)}),
       new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(path)}),
       new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(path)}),
       new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(path)}),
       new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(path)}),
       new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(path)}),
    ];

	var dice = new THREE.Mesh(
	    new THREE.CubeGeometry(2, 2, 2, 1, 1, 1),
	    new THREE.MeshFaceMaterial(materials)
	    );
	return dice;
}