function getUI(){
	//UI
	var UI = document.createElement('div');
	UI.innerHTML = 'UI parent';
	UI.style.position = 'absolute';
	UI.style.right= '0px';
	UI.style.width = '300px';	
	$(UI).css("background", "#EEDDDD");	
	return UI;
}