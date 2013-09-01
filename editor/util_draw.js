function getAxis(){
	var parent = new THREE.Object3D();
	var orig = new THREE.Vector3(0, 0, 0);
	var lineLength = 500;
	var lineX = getLine(orig, new THREE.Vector3(lineLength, 0, 0), 0xff0000);
	var lineY = getLine(orig, new THREE.Vector3(0, lineLength, 0), 0x00ff00);
	var lineZ = getLine(orig, new THREE.Vector3(0, 0, lineLength), 0x0000ff);
	parent.add(lineX);
	parent.add(lineY);
	parent.add(lineZ);

	//front word
	var textGeometry = new THREE.TextGeometry ( "front", { } );
	var textMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
	var textMesh = new THREE.Mesh(textGeometry, textMaterial);
	//position
	textMesh.rotation.x = -Math.PI/2;
	textMesh.scale.z = 0.1;
	textMesh.position.z = lineLength;
	parent.add(textMesh);

	return parent;
}