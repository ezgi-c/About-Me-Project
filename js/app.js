/* eslint-disable eqeqeq */
/* eslint-disable quotes */
'use strict';

let score = 0;

let userName=prompt("Hi there! What's your name?");

function greeting(){
  alert('Welcome to my page, ' + userName + '!');
}
greeting();

function questionName(){

  let ans1=prompt('Do you know my name? (y/n)').toLowerCase();

  if(ans1==='yes' || ans1==='yea' || ans1==='yep' || ans1==='yeah' || ans1==='yup' || ans1==='y'){
    alert('Awesome!');
  }else if(ans1==='no' || ans1 ==='nope' || ans1 ==='nah' || ans1==='n'){
    alert('No worries! Continue, to find out!');
  }else{
    alert('That is not a valid answer.');
  }
}
questionName();

function questionPrompt(question, correct1, correct2, correct3){
  let answer = prompt(question).toLowerCase();
  if(answer===correct1 || answer===correct2 || answer===correct3){
    alert("Correct!");
    score++;
    return;
  } alert("Incorrect.");
}
questionPrompt("How many cats do I have?", "two", "2", "meow meow");
questionPrompt("Where did I grow up?", "istanbul", "turkey", "istanbul, turkey");
questionPrompt("Guess my favorite beach in Seattle", "golden gardens", "golden gardens beach", "golden gardens park");

function eject(){
  let answer5=prompt('Do you want to know more? (y/n)');
  let ans5=answer5.toLowerCase();

  if(ans5==='yes' || ans5==='yea' || ans5==='yep' || ans5==='yeah' || ans5==='yup' || ans5==='y'){
    alert('Cool! Here you go!');
  }else if(ans5=='no' || ans5==='nope' || ans5==='nah' || ans5==='n'){
    alert('Ok bye!');
    window.location = 'https://canvas.instructure.com/courses/4898184/assignments/syllabus';
  }else{
    alert("I don't understand that answer.");
  }
}
eject();

function guessNumber(){

  for (let i=0; i<4; i++) {
    let ans6 = prompt("Guess a number between 0-10");
    if(i>=3){
      alert("sorry, you ran out of chances.");
      break;
    }else if(ans6==2){
      score++;
      alert("correct!");
      break;
    }else if(ans6>2){
      alert("too high. try again!");
    }else if(ans6<2){
      alert("too low. try again!");
    }else{
      alert('that is not a valid answer. try again!');
    }
  }
}
guessNumber();

function question7(){
  let countries = ['united states', 'u.s.', 'us', 'u.s.a.', 'usa', 'england', 'u.k.', 'uk', 'united kingdom', 'turkey', 'turkiye'];
  for (let i = 0; i < 6; i++) {
    let answer7 = prompt('I have lived in 3 countries. Can you guess one?');
    if(i>=5){
      alert('Sorry, you ran out of chances. I lived in England, Turkey, and United States.');
      return;
    }
    for (let j=0; j<countries.length; j++){
      let ans7=answer7.toLowerCase();
      if(ans7===countries[j]){
        score++;
        alert('correct!');
        return;
      }
    }
    alert('incorrect. try again.');
  }
}
question7();

alert('you answered ' + score + ' questions correctly!');
