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

//マウスボタンを離したとき
function onDocumentMouseUp( event ) {
	p('mouse up');
	switch(event.which){
		case MOUSE_LEFT:
			g_isMouseLeftPressed = false; break;
		case MOUSE_CENTER:
			g_isMouseCenterPressed = false; break;
		case MOUSE_RIGHT:
			g_isMouseRightPressed = false; break;
	}
}

//キー押下
function onDocumentKeyDown( event ) {
	switch( event.keyCode ) {
		case 16: g_isShiftDown = true; break;
		case 17: g_isCtrlDown = true; break;

		//アローキー
		case KEY_LEFT:
		case KEY_RIGHT:
		case KEY_UP:
		case KEY_DOWN:
			g_pressedArrowKey = event.keyCode;
			break;
	}
}

//キーUP時
function onDocumentKeyUp( event ) {
switch ( event.keyCode ) {
		case 16: g_isShiftDown = false; break;
		case 17: g_isCtrlDown = false; p('ctrl up'); break;

		//アローキー
		case KEY_LEFT:
		case KEY_RIGHT:
		case KEY_UP:
		case KEY_DOWN:
			g_pressedArrowKey = false;
			break;
	}
}