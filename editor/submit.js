function submitJSON(){
	p('submitJSON');
}

//確認UIを開いたとき
function submitConfirm(){
	var text = JSON.stringify(g_cubeJSON, null, 2);
	$("#submitData").text(text);
}
