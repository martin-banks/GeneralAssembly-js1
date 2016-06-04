// Print which ratings each age can watch
// Brief avaiable on:
// https://gist.github.com/jesstelford/027ee367d6f56c94dfadb1924e408ae9


var ages = [1, 23, 8, 12, 16]
var ratings = ['G', 'PG', 'M', 'MA']
var minAgeForRating = [0, 9, 12, 15]

var breaker = "---------------------"
console.log(breaker);

// Solution 1
console.log("Solution 1");
// define and initialise emppty array to save loop results
var allowed = [];
// loop functions over all entries in 'ages' array
for(i=0; i<ages.length; i++){
	// empty the array from previous loops
	allowed = [];	
	// reset index to loop through minAges
	var allowedIndex = 0;
	// compare each age to minAge, 
	// while that age is greater than minAge push to allowed array
	while(ages[i]>=minAgeForRating[allowedIndex]){
		allowed.push(ratings[allowedIndex]);
		// increase index to run over next minAge entry
		allowedIndex++
	}
	// print age and results of alowed array with additional text for context
	console.log("The age", ages[i], "is allow to watch", allowed.toString(), "rated movies");
}
// prints line in terminal to separate solutions
console.log(breaker)



// Solution 2
console.log("Solution 2");
// for each loop across all ages
ages.forEach(function(age,i){
	var b = 0;
	while(age>=minAgeForRating[b]){
		// prints indovidual results
		// not concatenated to single line for each age
		console.log("The age", ages[i], "is allow to watch", ratings[b]);
		b++
	}
});
console.log(breaker)



// Solution 3 	
console.log("Solution 3");

function findRatings(v,i){
	//console.log(v)
	var b=0;
	while(ages[i]>=minAgeForRating[b]){
		console.log( "age\t" +  ages[i] + "\tis allowed to watch\t" + ratings[b]);
		b++;
	}
}
ratings.map(findRatings);
console.log(breaker)



// Solution 4
// Different order of age ratings
console.log("Solution 4");
var ages = [1, 23, 8, 12, 16]
var ratings = ['G', 'MA', 'PG', 'M']
var minAgeForRating = [0, 15, 9, 12]

var allowed = ages.forEach(function(num){
	// funtion to determine boolean value 
	// if age meetas minAge requirements 
	function ratingsFilter(value, i){
		return num >= minAgeForRating[i]
	} 
	// use above function to filter each rating
	// for this age
	var filteredRatings = ratings.filter(ratingsFilter);
	console.log("If you're aged\t", num, "\tthen you can watch ratings\t", filteredRatings.toString() )
});
console.log(breaker);


// Solution 5
// Don't use > condition
console.log("Solution 5");
var allowed = ages.forEach(function(num){
	function ratingsFilter(value, i){
		// if minimum age is greater than age
		// subtracting will give negative number
		// sqrt of negative number returns as false
		// else returns true
		// ??? 
		return Math.sqrt(num - minAgeForRating[i]);
	} 
	// filter ratings by calling ratingsFilter function over each entry in ratings array
	// boolean determined by comparing age to minAge
	var filteredRatings = ratings.filter(ratingsFilter);
	console.log("If you're aged\t", num, "\tthen you can watch ratings\t", filteredRatings.join("\t") )
});
console.log(breaker)


// Solution 6
// use map method
console.log("Solution 6");
// loop through all elements in ages array
// 'age' is the value used inside loop
// 'i' is the index/counter of the loop in action
// arr is hte name of the array - access to all values
var allowed = ages.forEach(function(age, i, arr){
	// return array of booleans if age is allowed in rating
	var oldEnough = minAgeForRating.map(function(minAge, i) {
		return age >= minAge
	});
	// use oldEnough array to filter ratings not suitable
	var canWatch = ratings.filter(function(a,i){
		return oldEnough[i]
	});
	// print results to conslle
	console.log("If you're aged\t", age, "\tthen you can watch ratings\t", canWatch.join(" or ") )
});
console.log(breaker);







console.log("Solution 7 - Jess's solution");
// use .map to create and array of arrays
// itterate through each of the ages
var allowed = ages.map(function(age, i){
	// for each age filter by comparing to index in minAge array
	return ratings.filter(function(rating, ri){
		// if true returns the rating
		return age >= minAgeForRating[ri]
	})
});

// once new array of arrays is complete with allowed movies
// print all results 
var toPrint = ages.forEach(function(age, i){
	console.log("If you are\t", age, "\tyears old, you can watch movies rated\t", allowed[i].join('  '))
});



/*
// .map experiment with example from mdn.io
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
	return num>2
});
console.log(doubles)
var o = numbers.filter(function(a,i){
	return doubles[i]
})
console.log(o)
*/


//console.log(doubles);
/*

var n = numbers.forEach(function(numEach){
		function nMap(NumEachMap,i){
			return NumEachMap>2
		}
		var mapped = numbers.filter(nMap);
		console.log("mapped", mapped)
		return mapped
	});
	console.log("n", n)
	*/
