function Canvas3d()
{
	//const
	this.WIDTH = 300;
	this.HEIGHT = 300;

    this.camera = new THREE.PerspectiveCamera(45, this.WIDTH/ this.HEIGHT, 1, 10000);
	this.camera.position.y = 800;

	this.scene = new THREE.Scene();
	var cubeW = 100;
	var cubeGeo = new THREE.CubeGeometry(cubeW, cubeW, cubeW);
	var color = Math.random() * 0xffffff;
	var material = new THREE.MeshBasicMaterial({ color: color, opacity: 0.5, transparent: true });
	this.mesh = new THREE.Mesh(cubeGeo, material);
	this.scene.add(this.mesh);

	this.theta = 0;
	this.rotateSpeed = 0.3 * Math.random();

	//projector
	var projector = new THREE.Projector();

	//light
	var ambientLight = new THREE.AmbientLight(0x606060);
	this.scene.add(ambientLight);
	var directionalLight = new THREE.DirectionalLight(0xffffff);
	directionalLight.position.set(1, 0.75, 0.5).normalize();
	this.scene.add(directionalLight);

	//レンダラー
	this.renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true});
	this.renderer.setSize(this.WIDTH, this.HEIGHT);
};

Canvas3d.prototype.animate = function(){
	console.log("animate");
}

Canvas3d.prototype.getDOM = function(){
	return this.renderer.domElement;
};

Canvas3d.prototype.update= function(){
	//rotate
	this.theta += this.rotateSpeed;
	this.mesh.rotation.x = this.theta;

	this.camera.lookAt(this.scene.position);
	this.renderer.render(this.scene, this.camera);
};








function updateAll(){
	requestAnimationFrame(updateAll);
	for(var i=0; i<3; i++){
		g_canvas3d_array[i].update();
	}
}

$(function()
{
	g_canvas3d_array = new Array(); 
	for(var i=0; i<3; i++){
		var canvas3d = new Canvas3d();
		$("#root").append(canvas3d.getDOM());
		g_canvas3d_array.push(canvas3d);
	}

	updateAll();
});