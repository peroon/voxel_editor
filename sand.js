function getSand(){
	var sandTexture= THREE.ImageUtils.loadTexture( 'sand.jpg' );
	sandTexture.wrapS = sandTexture.wrapT = THREE.RepeatWrapping;
	sandTexture.repeat.set( 4, 4 );
	var sandWidth = 8;
	var sandGeometry = new THREE.PlaneGeometry(sandWidth, sandWidth, sandWidth, sandWidth);
	sand = new THREE.Mesh(
	    sandGeometry,
	    new THREE.MeshLambertMaterial( { map: sandTexture} )
	);
	sand.rotation.x = Math.PI / -2;
	sand.castShadow = true;
	sand.receiveShadow = true;
	return sand;
}