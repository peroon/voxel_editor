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
	var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 0.5, transparent: true });
	var mesh = new THREE.Mesh(cubeGeo, material);
	this.scene.add(mesh);

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

	var container = document.getElementById("root");
	container.appendChild(this.renderer.domElement);

	//仮にここで1度描画
	this.camera.lookAt(this.scene.position);
	this.renderer.render(this.scene, this.camera);
}

$(function(){
	var canvas3d = new Canvas3d();
});