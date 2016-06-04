var person = {
	speak: function() {
		console.log("Hi")
	}
};
person.speak();

var person2 = {
	speak: ()=> {
		console.log("Hi")
	}
};

person2.speak();