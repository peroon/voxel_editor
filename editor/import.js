function importFromWeb(){
	p('import from web');

	//ajax GET
	$.ajax({
	    url: 'http://192.168.33.10:3000/voxeljsons/6',
	    //url: 'http://api.stackoverflow.com/1.1/stats',
	    type: 'GET',
	    dataType: 'jsonp',
	    jsonp : 'jsonp',

	    success: function(html){
	    	p('success html');
	    	p(html);
	    },

	    error: function(html){
	    	p('error html');
	    	p(html);
	    }
	});

	p('imported from web');

}

function callbackfunc(v){
	console.log(v);
	console.log(v);
	console.log(v);
}