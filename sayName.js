//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name,age){
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var kevin = new Person('Kevin Worthington',18);
var chargris = new Person('Charles Markler',41);
var glassin = new Person('Glassoper',33);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(){
	alert(this.name);
}

kevin.sayName();
