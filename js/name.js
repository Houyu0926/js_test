
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];



for (var i = 0; i < names.length; i++) {
	if (names[i].startsWith("J") || names[i].startsWith("j")){
		console.log("Good Bye " + names[i]);
	}else{
		console.log("Hello " + names[i]);
	}
  
}


