function clearAllCube(){
	p("clearAllCube");

	//JSON
	g_cubeJSON.cubes = {};
	updateJSON();

	//メッシュ
	//TODO
	//sceneをグローバル化して
	//tag=="cube"のものを全削除

	//キューブ数
	setCubeNum(0);
}