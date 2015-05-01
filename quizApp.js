//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

 var User = function(name,emell,password,totalScore){
 	this.name = name;
 	this.email = emell;
 	this.password = password;
 	this.totalScore = totalScore;
 }


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function(title,answersArray,rightAnswer,difficulty){
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
}


//Create a users Array which is going to hold all of our users.

var users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

users.push(new User('Jarvis','jarbro@falsehumans.net','lawof42',0));
users.push(new User('Kevbot','kevinator@falsehumans.net','untitledarray',0));
users.push(new User('Servicefriend','servemefriend@falsehumans.net','seemewellseemeshot',0));


//Create a questions Array which is going to hold all of our questions

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

questions.push(new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?',[true,false],true,4));
questions.push(new Question('T/F: JavaScript is just a scripting version of Java',[true,false],false,8));
questions.push(new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value",[true,false],true,9));
questions.push(new Question("MC: If a man is found to be afflicted with the plague of weakmindedness, what is the appropriate punishment?",["Branding","Bloodletting","Bartholomewity","Bunkbaiting"],"Bloodletting",5));


//Now push all of your instances of Question into the questions Array

  //code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

users.forEach(function(item){
	console.log(item);
});

questions.forEach(function(item){
	console.log(item);
});

