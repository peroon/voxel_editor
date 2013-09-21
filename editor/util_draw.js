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

function getCubeMaterial(color){
	var mat = new THREE.MeshLambertMaterial( { color: color, ambient: 0x00ff80, 
			shading: THREE.FlatShading, map: THREE.ImageUtils.loadTexture( "square-outline-textured.png" ) } );
			//shading: THREE.FlatShading, map: THREE.ImageUtils.loadTexture( "image/cube.png" ) } );
	mat.ambient = mat.color;
	return mat;
}

//シャープ記法の色を数値に変換
//#ff0000
//0xff0000
function sharpTo0x(sharp_color){
	return sharp_color.replace("#", "0x") - 0;
}

//
//input: 0x00ff00
//output: "#00ff00"
function num0x_to_sharp_string(val){
	var str = val.toString(16);
	str = '000000' + str;
	str = str.substr(-6);
	return '#' + str;
}

//マウスキューブの色変更
function changeColorOfCube(color_0x){
	var material = new THREE.MeshBasicMaterial( { color: color_0x, opacity: 0.5, transparent: true } );
    g_rollOverMesh.material = material;
    g_rollOverMeshMirror.material = material;
}
