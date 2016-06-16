function foo(){
	var bar = "bar";
	quux = 1;
	function zip(){
		var quux = 3; 
		bar = true;

	}
	return zip
}