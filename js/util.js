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

//線を引く
function getLine(v0, v1, color){
	var lineMaterial = new THREE.LineBasicMaterial({
        color: color,
        linewidth: 3
    });
	var lineGeometry = new THREE.Geometry();
	    lineGeometry.vertices.push(v0);
	    lineGeometry.vertices.push(v1);
	var line = new THREE.Line(lineGeometry, lineMaterial);
	return line;
}

function getStats(){
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	return stats;
}

//角度を範囲内に
function degreeInRange(degree){
	if(degree < 0){
		degree += 360;
	}
	else if(degree > 360){
		degree -= 360;
	}
	return degree;
}
//thetaを1-179 degreeに
function thetaInRange(theta){
	if(theta < 1){
		theta = 1;
	}
	else if(theta > 179){
		theta = 179;
	}
	return theta;
}