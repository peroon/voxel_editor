$(function(){
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	var container, stats;
	var scene, g_renderer;
	var projector, plane, cube;
	var mouse3D, raycaster,

	//キー
	rollOveredFace, isShiftDown = false,
	pressedArrowKey = false;

	//カメラ角度
	phi = 75;
	theta = 60;
	isCtrlDown = false;

	var rollOverMesh, rollOverMaterial;
	var voxelPosition = new THREE.Vector3(), tmpVec = new THREE.Vector3(), normalMatrix = new THREE.Matrix3();
	var cubeGeo, cubeMaterial;
	var i, intersector;

	//デバッグ表示
	var debugHash = new Array();
	var debugInfo;

	init();
	animate();

	//デバッグ情報更新
	function updateDebugInfo(){
		var innerHTML = hash2html(debugHash);
		debugInfo.innerHTML = innerHTML;
	}

	function hash2html(hash){
	//function hash2html(){
		var html = '<br><br><br>';
		for(var key in hash){
			var addHTML = key + ' : ' + hash[key] + '<br>';
			html += addHTML;
		}
		return html;
	}

	function init() {
		p("init");
		//ルート
		// container = document.createElement('div');
		container = document.getElementById('container');
		//document.body.appendChild( container );
		//gray background
		$(container).css("background", "#DDDDDD");
		$(container).css("width", "240px");
		$(container).css("height", "1000px");

		//デバッグ表示
		debugInfo = document.createElement('div');
		debugInfo.innerHTML = 'init html';
		debugInfo.style.position = 'absolute';
		container.appendChild(debugInfo);

		//UI
		container.appendChild(getUI());

		//カメラ
		g_camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
		g_camera.position.y = 800;

		//シーン
		scene = new THREE.Scene();

		scene.add(getAxis());

		//?
		// roll-over helpers
		rollOverGeo = new THREE.CubeGeometry(CUBE_WIDTH, CUBE_WIDTH, CUBE_WIDTH);
		rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
		rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
		scene.add( rollOverMesh );

		// cubes
		cubeGeo = new THREE.CubeGeometry(CUBE_WIDTH, CUBE_WIDTH, CUBE_WIDTH);
		cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c, ambient: 0x00ff80, shading: THREE.FlatShading, map: THREE.ImageUtils.loadTexture( "square-outline-textured.png" ) } );
		cubeMaterial.ambient = cubeMaterial.color;

		//レイ
		projector = new THREE.Projector();

		//グリッド（もっと簡潔に書ける）
		var size = 500, step = 50;
		var geometry = new THREE.Geometry();
		for ( var i = - size; i <= size; i += step ) {
			geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
			geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );
			geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
			geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );
		}
		var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );
		var line = new THREE.Line( geometry, material );
		line.type = THREE.LinePieces;
		scene.add( line );

		//?
		plane = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000 ), new THREE.MeshBasicMaterial() );
		plane.rotation.x = - Math.PI / 2;
		plane.visible = false;
		scene.add( plane );

		g_mouse2d = new THREE.Vector3( 0, 10000, 0.5 );

		//ライト
		var ambientLight = new THREE.AmbientLight( 0x606060 );
		scene.add( ambientLight );
		var directionalLight = new THREE.DirectionalLight( 0xffffff );
		directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
		scene.add( directionalLight );

		//レンダラー
		g_renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer: true } );
		//描画サイズ
		//ちょっと小さくすることで画面内におさめる
		// g_renderer.setSize(window.innerWidth-10, window.innerHeight-10);
		var paddingWidth = 10;
		g_renderer.setSize(window.innerWidth-paddingWidth, window.innerHeight-paddingWidth);
		container.appendChild( g_renderer.domElement ); //canvas

		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		container.appendChild( stats.domElement );

		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		document.addEventListener( 'keydown', onDocumentKeyDown, false );
		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		window.addEventListener( 'resize', onWindowResize, false );
	}//init

	//リアル？
	function getRealIntersector( intersects ) {
		for( i = 0; i < intersects.length; i++ ) {
			intersector = intersects[ i ];
			if ( intersector.object != rollOverMesh ) {
				return intersector;
			}
		}
		return null;
	}

	//ボクセル位置
	function setVoxelPosition( intersector ) {
		if(intersector.face!=null){
			normalMatrix.getNormalMatrix( intersector.object.matrixWorld );
			tmpVec.copy( intersector.face.normal );
			tmpVec.applyMatrix3( normalMatrix ).normalize();
			voxelPosition.addVectors( intersector.point, tmpVec );

			var w = CUBE_WIDTH;
			voxelPosition.x = Math.floor( voxelPosition.x / w ) * w + w/2;
			voxelPosition.y = Math.floor( voxelPosition.y / w ) * w + w/2;
			voxelPosition.z = Math.floor( voxelPosition.z / w ) * w + w/2;
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

	//マウス押下時
	function onDocumentMouseDown( event ) {
		event.preventDefault();

		switch(event.which){
			case MOUSE_LEFT:
				g_isMouseLeftPressed = true; break;
			case MOUSE_CENTER:
				g_isMouseCenterPressed = true; break;
			case MOUSE_RIGHT:
				g_isMouseRightPressed = true; break;
		}

		if(event.which==MOUSE_LEFT){
			var intersects = raycaster.intersectObjects( scene.children );
			if ( intersects.length > 0 ) {
				intersector = getRealIntersector( intersects );

				//削除
				if ( isCtrlDown ) {
					if ( intersector.object != plane ) {
						scene.remove( intersector.object );
					}

				//作成
				} else {
					intersector = getRealIntersector( intersects );
					setVoxelPosition( intersector );

					var voxel = new THREE.Mesh( cubeGeo, cubeMaterial );
					voxel.position.copy( voxelPosition );
					voxel.matrixAutoUpdate = false;
					voxel.updateMatrix();
					scene.add( voxel );
				}
			}
		}
		else if(event.which==MOUSE_RIGHT){
			p('mouse right clicked');
		}
		else{
			p('mouse center clicked');
		}
	}

	//?
	function onDocumentKeyDown( event ) {
		switch( event.keyCode ) {
			case 16: isShiftDown = true; break;
			case 17: isCtrlDown = true; break;

			//アローキー
			case KEY_LEFT:
			case KEY_RIGHT:
			case KEY_UP:
			case KEY_DOWN:
				pressedArrowKey = event.keyCode;
				break;
		}
	}

	//キーUP時
	function onDocumentKeyUp( event ) {
	switch ( event.keyCode ) {
			case 16: isShiftDown = false; break;
			case 17: isCtrlDown = false; p('ctrl up'); break;

			//アローキー
			case KEY_LEFT:
			case KEY_RIGHT:
			case KEY_UP:
			case KEY_DOWN:
				pressedArrowKey = false;
				break;
		}
	}

	//Update
	function animate() {
		requestAnimationFrame( animate );
		render();
		stats.update();
	}

	//描画
	function render() {
		if ( isShiftDown ) {
			theta += g_mouse2d.x * 1.5;
		}
		raycaster = projector.pickingRay( g_mouse2d.clone(), g_camera );
		var intersects = raycaster.intersectObjects( scene.children );

		if ( intersects.length > 0 ) {
			intersector = getRealIntersector( intersects );
			if ( intersector ) {
				setVoxelPosition( intersector );
				rollOverMesh.position = voxelPosition;
			}
		}

		//アローキーの回転
		if(pressedArrowKey){
			//シーン回転
			var rotateSpeed = 2;
			switch(pressedArrowKey){
				case KEY_LEFT:
					phi += rotateSpeed;
					break;
				case KEY_RIGHT:
					phi -= rotateSpeed;
					break;
				case KEY_UP:
					theta += rotateSpeed;
					break;
				case KEY_DOWN:
					theta -= rotateSpeed;
					break;
			}
			theta = thetaInRange(theta);
			theta = degreeInRange(theta);
			phi = degreeInRange(phi);
		}
		//デバッグ情報
		debugHash['theta'] = theta;
		debugHash['phi'] = phi;
		updateDebugInfo();


		//ステージではなくカメラを回転させる
		var cameraR = 1500;
		//camera.position.x = cameraR * Math.sin( THREE.Math.degToRad( theta ) );
		//camera.position.z = cameraR * Math.cos( THREE.Math.degToRad( theta ) );

		//球座標
		var sin_theta = Math.sin(THREE.Math.degToRad(theta));
		var cos_theta = Math.cos(THREE.Math.degToRad(theta));
		var sin_phi   = Math.sin(THREE.Math.degToRad(phi));
		var cos_phi   = Math.cos(THREE.Math.degToRad(phi));
		g_camera.position.x = cameraR * sin_theta * cos_phi;
		g_camera.position.z = cameraR * sin_theta * sin_phi;
		g_camera.position.y = cameraR * cos_theta;

		g_camera.lookAt( scene.position );

		g_renderer.render( scene, g_camera );
	}
});