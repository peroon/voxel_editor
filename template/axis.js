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

