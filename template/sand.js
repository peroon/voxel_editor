function getSand(){
	var sandTexture= THREE.ImageUtils.loadTexture( 'sand.jpg' );
	sandTexture.wrapS = sandTexture.wrapT = THREE.RepeatWrapping;
	sandTexture.repeat.set( 4, 4 );
	var sandWidth = 8*8;
	var geometry = new THREE.PlaneGeometry(sandWidth, sandWidth, sandWidth, sandWidth);

	//perlin noise
	var simplexNoise = new SimplexNoise;
	for ( i = 0; i < geometry.vertices.length; i++ ) {
	    var vertex = geometry.vertices[ i ];
	    vertex.z = simplexNoise.noise( vertex.x / 20, vertex.y / 20 );
	}

	//normal vector
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();

	sand = new THREE.Mesh(
	    geometry,
	    new THREE.MeshLambertMaterial( { map: sandTexture} )
	);
	sand.rotation.x = Math.PI / -2;
	sand.castShadow = true;
	sand.receiveShadow = true;

	return sand;
}