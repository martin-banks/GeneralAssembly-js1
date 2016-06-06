function addToQueue(names, queueLength){
  var positions = []

// can be done with a forEach - useful when nesting 
// functions using the same function/var names like i
// changing var to let - but not supported on mobile

names.forEach(function(name, i){
	(function(index){
		positions[index] = function() {
			return queueLength + index + 1
		}
	})(i);	
})
  /*for (var i = 0; i < names.length; i++) {
    positions[i] = function() {
    	return queueLength + i + 1
    }
  } // end for*/

  // returns the new array with position numbers
  return positions
}

// array of people to add to queue
var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10);


queuePositions[0]() // 13?! Should be 11
queuePositions[1]() // 13 As well!