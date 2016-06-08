
// Helper function - stop me miss-spelling selector
var $get = function(param){
	return document.querySelector(param);
};

// IIFE - Immediately, Invode Function Expression 
// ~self-executing function 
(function(){
	$get('#noteText').focus(); // make the input field active
})()



// Refactored version with var out of global scope
function createNote(){
	/* // separate functions to get values form the user input 
	var noteText = function(){
		return $get('#noteText').value
	};
	var noteColor = function(){
		return $get('#colourPick').value
	};*/
	// Single function to get value from any input
	var getVal = function(param){
		return $get(param).value;
	};

	// function to add index numbers - param for id/class/element to count
	var count = function(param){
		if (!!$get(param)){ // if there already are notes
			return (document.querySelectorAll(param).length) +1; // count them
		}
		else { // else this is the first note
			return 1;
		}	
	}

	if ( !!(getVal('#noteText')) && !!(getVal('#colourPick')) ){ // if input not empty
		// div tempalte for sticky note
		var template = document.createElement('div');
			template.className = 'box';
			// get value of selected colour from dropdown menu
			template.style.backgroundColor = getVal('#colourPick');
			// Call count function and concatonate with input text
			template.innerHTML = count('.box') + '.' + getVal('#noteText');
	
		$get('.container').appendChild(template); // add sticky to div.container 
		// clear fields ready for next sticky
		$get('#noteText').value = '';
		return false;
	} else { // else show alert input is empty
		alert('No note!');
		return false;
	}	
};

// keyboard events on input field
$get('#noteText').onkeypress = function(event){
	if (event.keyCode === 13){ // if enter button
		event.preventDefault(); // prevent default behaviour - refresh
		createNote(); // call addNotes function
		return false;
	}
}

// click event on button
$get('#clicker').onclick = function(){
	//createNote(noteText(), noteColor());	
	createNote(); // call addNotes functions
	return false;
}

