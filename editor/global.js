var g_camera;
var g_renderer;
var g_mouse2D;

//マウス押下
var g_isMouseLeftPressed;
var g_isMouseCenterPressed;
var g_isMouseRightPressed;

//マウス位置(1フレーム前)
var g_oldPageX = 0;
var g_oldPageY = 0;

//キー
var g_isShiftDown = false;
var g_isCtrlDown = false;

var g_pressedArrowKey;

//カメラ角度
var g_phi = 75;
var g_theta = 60;

//マウスキューブ
var g_rollOverMesh;
var g_cubeMaterial;

//カラーピッカー
var g_selectedColor = 0xff0000;
var g_selectedMaterial = getCubeMaterial(g_selectedColor);
