
		// Stop me miss-spelling selector
		var $get = function(param){
			return document.querySelector(param);
		};

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

		// function to add index numbers
		var count = function(param){
			if (!!$get(param)){ // if there already are notes
				return (document.querySelectorAll(param).length) +1; // count them
			}
			else { // else this is the first note
				return 1;
			}	
		}

		function createNote(paramText,paramColor){
			if (!!paramText && !!paramColor){ // if input not empty
				// div tempalte for sticky note
				var template = document.createElement('div');
					template.className = 'box';
					template.style.backgroundColor = paramColor;
					// Call count function and concatonate with input text
					template.innerHTML = count('.box') + '.' + paramText;
			
				$get('.container').appendChild(template); // add sticky to div.container 
				// clear fields ready for next sticky
				$get('#noteText').value = '';
				return false;
			} else { // else show alert input is empty
				alert('No note!');
				return false;
			}	
		};

		// Function to pass arguments to create the sticky
		function addNotes(){
			createNote(getVal('#noteText'), getVal('#colourPick'))
		}

		// keyboard events on input field
		$get('#noteText').onkeypress = function(event){
			if (event.keyCode === 13){ // if enter button
				event.preventDefault(); // prevent default behaviour - refresh
				addNotes(); // call addNotes function
				return false;
			}
		}

		// click event on button
		$get('#clicker').onclick = function(){
			//createNote(noteText(), noteColor());	
			addNotes(); // call addNotes functions
			return false;
		}

