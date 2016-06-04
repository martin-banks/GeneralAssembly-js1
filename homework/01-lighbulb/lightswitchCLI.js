var light = "off"
var lightswitch = function(p) {
	if (light === p) {
		light = "off";
	} else {
		light = p;
	}
	return light;
}

