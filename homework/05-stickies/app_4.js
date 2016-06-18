
// Helper function - stop me miss-spelling selector
var $get = function(param){
	return document.querySelector(param);
};

var $getAll = function(param){
	return document.querySelectorAll(param);
};


$get('#noteText').focus(); // make the input field active


// Refactored version with var out of global scope
function createNote(){
	// Single function to get value from any input
	var getVal = function(param){
		return $get(param).value;
	};
/*
	// function to add index numbers - param for id/class/element to count
	// only useful if this could have notes at beginning
	var count = function(param){
		if (!!$get(param)){ // if there already are notes
			return ($getAll(param).length) +1; // count them
		}
		else { // else this is the first note
			return 1;
		}	
	}
*/

	var count = 0;
	

	if ( !!(getVal('#noteText')) && !!(getVal('#colourPick')) ){ // if input not empty
	
		var noteNumber = document.createTextNode(count);

		var noteNumberPar = document.createElement('span');
			noteNumberPar.className = 'noteNumber';
			noteNumberPar.id ='noteNumber'+count;
			noteNumberPar.appendChild(noteNumber);

		var stickyText = document.createTextNode(getVal('#noteText'));
		
		// div template for sticky note
		var template = document.createElement('div');
			template.className = 'box';
			// get value of selected colour from dropdown menu
			template.style.backgroundColor = getVal('#colourPick');
			// Call count function and concatonate with input text	
			template.appendChild(noteNumberPar);
			template.appendChild(stickyText);

		$get('.container').appendChild(template); // add sticky to div.container 

		// create textNode to append text into the remove button
		var removeID = 'removeButton' + (count-1)
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


// updates the numbers on each note to match it's index+1
// updates ids to match index
function updateNoteNumbers(){
	for(var i=0; i < $getAll('.box').length; i++){
		//console.log('box id before:', $getAll('.box')[i].id );

		// set id of each sticky note
		$getAll('.box')[i].id = 'stickyNote_'+(i+1);
		// set id of remove button - the last child of each sticky
		$getAll('.box')[i].lastChild.id = 'removeButton' + (i+1);
		// set id of index number - the first child of each sticky
		$getAll('.box')[i].firstChild.id = 'noteNumber' + (i+1);
		// set text of first child - the index number
		$getAll('.box')[i].firstChild.innerHTML = (i+1) + '. '

		//console.log('box id after:', $getAll('.box')[i].id );
	}
}



//////////////////////////////////////////////////////
//////// Calling the functions ///////////////////////
//////////////////////////////////////////////////////

// keyboard events on input field
$get('#noteText').onkeypress = function(event){
	if (event.keyCode === 13){ // if enter button
		event.preventDefault(); // prevent default behaviour - refresh
		createNote(); // call addNotes function
		updateNoteNumbers();
		return false;
	}
}

// click event on button
$get('#clicker').onclick = function(){
	createNote(); // call addNotes functions
	updateNoteNumbers();
	return false;
}


// removes note and udates numbers from div.container
// click event added to div.removeButton on it's creation
// references this.parentNode
function removeNote(param){
	param.remove();
	updateNoteNumbers();

};

