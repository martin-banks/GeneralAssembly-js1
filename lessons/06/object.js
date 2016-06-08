console.log('\n', '--------------------', '\n')

var speakers = ['left', 'right'];

var laptop = {
	usbPorts: 1,
	touchPad: true,
	ram: '8gb',
	evening: function(){
		return "watch netflix"
	},
	sound: speakers.length,
	software: {
		browser: 'Chrome',
		code: 'sublime',
		chat: ['slack', 'google hangout', 'skype'],
		design: ['Indesign', 'Illustrator', 'Sketch']
	},
	startupNoise: function(){
		console.log('bong');
	}

};

// change values of existing object key/values
laptop.usbPorts = '1 USBC';

// create new keys & values 
laptop.otherports = false;

console.log('laptop:', laptop, '\n');

var keys = Object.keys(laptop, '\n');

console.log('keys', keys, '\n');

keys.forEach(function(k){
	console.log('---', k, laptop[k], '\n')
});

console.log('number of design apps:', laptop.software.design.length, '\n')





console.log('\n', '--------------------', '\n');

// factory function
// use function to create object and it's elements 
// to keep keys/values "private"
// additional conditions can be put in palce to 
// control input: for example; power can only be on or off
// else throw alert error
var makeLaptop = function(p, c){
	return {
		setPower: function(newPower){
			p = newPower
		},
		getPower: function(){
			console.log(p);
			return p
		},

		setColour: function(newColor){
			c = newColor
		},
		getColour: function(){
			console.log(c);
			return c
		}
	}
}


// var/object calls factory function to create object
// values pased in become the default values
var macBook = makeLaptop('on', 'grey');
	macBook.getColour();
	macBook.getPower();
	
	// calling the setFunctions is only way 
	// to change values from initial creation
	macBook.setColour('blue');
	macBook.setPower('off');
	macBook.getColour();
	macBook.getPower();




// values not directly accessible
// functions in object used to set/return values
console.log('macbook:', macBook);


console.log('\n', '--------------------', '\n');

// JSON.stringify() turns JS object into JSON string.
// This can be saved as file
 
var laptopJSON = JSON.stringify(laptop);
console.log('JSON:', laptopJSON);

// JSON.parse() changes JSON string into JS object
var laptopUnJSON = JSON.parse(laptopJSON);
console.log('object:', laptopUnJSON);


// safely test JSON while parse-ing 
try{
	// will return object if parse is successful
	var laptopUnJSON_try = JSON.parse(laptopJSON);
	console.log('object:', laptopUnJSON_try);
} catch(error) {
	// should console.log the error
	console.log(error);
}