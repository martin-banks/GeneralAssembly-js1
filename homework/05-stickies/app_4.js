
// Helper function - stop me miss-spelling selector
var $get = function(param){
	return document.querySelector(param);
};

var $getAll = function(param){
	return document.querySelectorAll(param);
};

// IIFE - Immediately, Invoked Function Expression 
// ~self-executing function 
(function(){
	$get('#noteText').focus(); // make the input field active
})()



// Refactored version with var out of global scope
function createNote(){
	// Single function to get value from any input
	var getVal = function(param){
		return $get(param).value;
	};

	// function to add index numbers - param for id/class/element to count
	var count = function(param){
		if (!!$get(param)){ // if there already are notes
			return ($getAll(param).length) +1; // count them
		}
		else { // else this is the first note
			return 1;
		}	
	}

	

	if ( !!(getVal('#noteText')) && !!(getVal('#colourPick')) ){ // if input not empty
		// div template for sticky note
		var template = document.createElement('div');
			template.className = 'box';
			// get value of selected colour from dropdown menu
			template.style.backgroundColor = getVal('#colourPick');
			// Call count function and concatonate with input text
			template.innerHTML = count('.box') + '.' + getVal('#noteText');

/*
		var noteNumber = document.createTextNode(count('.box'));
		var noteNumberPar = document.createElement('p');
			noteNumberPar.className = 'noteNumber';
			noteNumberPar.id ='noteNumber'+count('.box');	
			noteNumberPar.appendChild(noteNumberPar);
		*/




		$get('.container').appendChild(template); // add sticky to div.container 


		// create textNode to append text into the remove button
		var removeID = 'removeButton' + (count('.box')-1)
		var x = document.createTextNode('X')
		var removeButton = document.createElement('div');
			removeButton.className = 'removeButton';
			removeButton.id = removeID;
			// append textNode to rmove button div
			removeButton.appendChild(x);

		
		$getAll('.box')[($getAll('.box').length)-1].appendChild(removeButton);

		// to add event listeners with dynamic element creation
		// the function to be called must be wrapped in a function declaration
		$get('#'+removeID).addEventListener('click', function() {removeNote(this.parentNode)}, false)

		console.log( $getAll('.box').length )

		// clear fields ready for next sticky
		$get('#noteText').value = '';
		return false;
	} else { // else show alert input is empty
		alert('No note!');
		return false;
	}	
};



function addNoteNumbers(){
	for(var i=0; i < $getAll('.box').length; i++){
		console.log('box id before:', $getAll('.box')[i].id );

		$getAll('.box')[i].id = 'stickyNote_'+(i+1);
		$getAll('.box')[i].lastChild.id = 'removeButton' + (i+1);

		console.log('box id after:', $getAll('.box')[i].id );

	}
}






//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// keyboard events on input field
$get('#noteText').onkeypress = function(event){
	if (event.keyCode === 13){ // if enter button
		event.preventDefault(); // prevent default behaviour - refresh
		createNote(); // call addNotes function
		addNoteNumbers();
		return false;
	}
}

// click event on button
$get('#clicker').onclick = function(){
	createNote(); // call addNotes functions
	return false;
}



function removeNote(param){
	param.remove();
	addNoteNumbers();

};

