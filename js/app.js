'use strict';

let userName=prompt('Hi there! What\'s your name?');
// console.log('The user\'s name is: ' + userName);
alert('Welcome to my page, ' + userName + '!');

let answer1=prompt('Do you know my name?');
let ans1=answer1.toLowerCase();

if(ans1==='yes' || ans1==='yea' || ans1==='yep' || ans1==='yeah' || ans1==='yup' || ans1==='y'){
  // console.log('The user knows my name.');
  alert('Awesome!');
}else if(ans1==='no' || ans1 ==='nope' || ans1 ==='nah' || ans1==='n'){
  // console.log('The user does not know my name.');
  alert('No worries! Continue, to find out!');
}else{
  // console.log('Invalid answer.');
  alert('That is not a valid answer.');
}

let answer2=prompt('How many cats do I have?');
let ans2=answer2.toLowerCase();

if(ans2==2 || ans2==='two'){
  // console.log('correct answer');
  alert('That\'s correct!');
}else{
  // console.log('incorrect answer');
  alert('Good guess '+userName+'! I actually have 2 cats!');
}

let answer3=prompt('Where did I grow up?');
let ans3=answer3.toLowerCase();

if(ans3==='istanbul' || ans3==='istanbul, turkey' || ans3=== 'turkey' || ans3==='turkiye'){
  // console.log('correct answer');
  alert('That\'s correct!');
}else{
  // console.log('incorrect answer');
  alert('I actually grew in Istanbul, Turkey');
}

let answer4=prompt('Guess my favorite beach in Seattle');
let ans4=answer4.toLowerCase();

if(ans4==='golden gardens' || ans4==='golden gardens beach' || ans4==='golden gardens park'){
  // console.log('correct answer');
  alert('That\'s correct!');
}else{
  // console.log('incorrect answer');
  alert('No, but I like that one too!');
}

let answer5=prompt('Do you want to know more?');
let ans5=answer5.toLowerCase();

if(ans5==='yes' || ans5==='yea' || ans5==='yep' || ans5==='yeah' || ans5==='yup' || ans5==='y'){
  // console.log('user answered: yes');
  alert('Cool! Here you go!');
}else if(ans5=='no' || ans5==='nope' || ans5==='nah' || ans5==='n'){
  // console.log('user answered: no');
  alert('Ok bye!');
  window.location = 'https://canvas.instructure.com/courses/4898184/assignments/syllabus';
}else{
  // console.log('invalid answer');
  alert('I dont understand that answer.');
}
