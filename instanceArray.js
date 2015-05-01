/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [
new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'),
new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'),
new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup')

];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var otherUsers = [];
otherUsers.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
otherUsers.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
otherUsers.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

for(var prop in users[0]){
  console.log(prop + ': ' + users[0][prop]);
}

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

for(var prop in users[2]){
  console.log(prop + ': ' + users[0][prop]);
}


//Now create another instance of User using your own information and then add that to your users array.

users.push(new User('Richard','fakerick@falsehumans.net','penaldungeon'));

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

users.forEach(function(fella){
  console.log(fella.name);
});
