function threeJsColor_to_sharpColor(threeJsColor){
	var r = 255 * threeJsColor.r;
	var g = 255 * threeJsColor.g;
	var b = 255 * threeJsColor.b;

	var s = '#' + zero2(r.toString(16)) + zero2(g.toString(16)) + zero2(b.toString(16));
	return s;
}