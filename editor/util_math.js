//角度を範囲内に
function degreeInRange(degree){
	if(degree < 0){
		degree += 360;
	}
	else if(degree > 360){
		degree -= 360;
	}
	return degree;
}

//thetaを1-179 degreeに
function thetaInRange(theta){
	if(theta < 1){
		theta = 1;
	}
	else if(theta > 179){
		theta = 179;
	}
	return theta;
}