(function(){
    "use strict";

    	var names = ['Steven', 'Andrew', 'Walter', 'Stark']; 
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    	console.log(names.length);
    // TODO: Create a log statement that will log the number of elements in the names array.

    	for (var i = 0; i < names.length; i++) {
    		console.log("The name at index number " + i +" is " +names[i]);
    	}

    	names.forEach(function(element, index, array) {
    		console.log("Testing forEach, the name at index number " + index + " is " + element);
    	});
    // TODO: Create log statements that will print each of the names array elements individually.
})();
