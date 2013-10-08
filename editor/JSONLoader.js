function JSONLoader()
{
};

JSONLoader.prototype.http_get = function(id){
	console.log("http_get");
	console.log(id);
	var url = 'http://192.168.33.10:3000/voxeljsons/'+id;
	url = 'http://api.stackoverflow.com/1.1/stats';

	$.ajax({
	    url: url,
	    type: 'GET',
	    dataType: 'jsonp',
	    jsonp : 'jsonp',
	});
};

JSONLoader.prototype.callbackfunc = function(json_object){
	console.log(json_object);
};







	var id=6;
	console.log("http_get");
	console.log(id);
	var url = 'http://192.168.33.10:3000/voxeljsons/'+id;
	//url = 'http://api.stackoverflow.com/1.1/stats';

	$.ajax({
	    url: url,
	    type: 'GET',
	    dataType: 'jsonp',
	    jsonp : 'jsonp',
	});

function callbackfunc(json_object){
	console.log(json_object);
};

var jsonLoader = new JSONLoader();
jsonLoader.http_get(6);

