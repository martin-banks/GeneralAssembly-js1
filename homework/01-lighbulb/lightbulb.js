var lightState = 'off';
console.log(lightState);

var prompt = require('prompt');
prompt.start();

prompt.get(['colour'], function(err, result){
	if (result.colour === lightState) {
		lightState = "off"
		console.log("The light is", lightState);
		var prompt = require('prompt');
		prompt.start();
	} else {
		lightState = result.colour
		console.log("The light is", lightState);
		var prompt = require('prompt');
		prompt.start();
	}
});


var prompt = require('prompt');
prompt.start();