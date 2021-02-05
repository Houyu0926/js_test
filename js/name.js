
var names = ["Bob", "Paul", "Joe", "Brown", "Jules", "Xavier", "kevin", "james"];



for (var i = 0; i < names.length; i++) {
	if (names[i].startsWith("J") || names[i].startsWith("j")){
		console.log("Goodbye J" + names[i]);
	}else{
		console.log("Hello " + names[i]);
	}
  
}


