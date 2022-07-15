'use strict';

let userName = prompt('Hi there! What\'s your name?');
console.log ('The user\'s name is: ' + userName);
alert ('Welcome to my page, ' + userName + '!');

let answer1= prompt('Do you know my name?');

if(answer1==='yes' || answer1==='yea' || answer1==='yep' || answer1==='yeah' || answer1==='yup'){
  console.log ('The user knows my name.');
  alert('Awesome!');
}else if(answer1==='no' || answer1 ==='nope' || answer1 ==='nah'){
  console.log ('The user does not know my name.');
  alert('No worries! Continue, to find out!');
}else{
  console.log('Invalid answer.');
  alert('That is not a valid answer.');
}

// got stuck for hours trying to make .toLowercase work but it didnt :(((