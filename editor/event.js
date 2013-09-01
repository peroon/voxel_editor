//ウィンドウリサイズ時
function onWindowResize() {
	g_camera.aspect = window.innerWidth / window.innerHeight;
	g_camera.updateProjectionMatrix();
	g_renderer.setSize( window.innerWidth, window.innerHeight );
}

//マウス移動時
//X, Y = -1~1
function onDocumentMouseMove( event ) {
	event.preventDefault();
	g_mouse2d.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	g_mouse2d.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	if(g_isMouseRightPressed){
		p("A");
	}
}