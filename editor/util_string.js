//ゼロ埋め
//v:数値または文字列
function zeroPadding(v, len){
	//文字列化
	v = '' + v;

	//ゼロ付ける
	v = '00000000' + v;

	//スライス
	return v.slice(-len);
}

//略記
function zero2(s){
	return zeroPadding(s,2);
}
function zero4(){
	return zeroPadding(s,4);
}
function zero8(){
	return zeroPadding(s,8);
}

//文字列のかけ算
function multiply_string(str, num){
	var return_string = '';
	for(var i=0; i<num; i++){
		return_string += str;
	}	
	return return_string;
}

