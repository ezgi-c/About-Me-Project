/* eslint-disable eqeqeq */
/* eslint-disable quotes */
'use strict';

let score = 0;
let userName=prompt("Hi there! What's your name?");

function questionPrompt(answer,correct1, correct2){
  let message = prompt( answer.toLowerCase());
  if(message===correct1 || message===correct2){
    alert("correct");
    return;
  } alert("incorrect");
}
questionPrompt("Do I have two cats?", "yes", "y");
// first function done
questionPrompt("Did I grow up in Seattle, WA?", "no", "n");
//second function done
questionPrompt("Is Green Lake my favorite beach?", "no", "n");
//third function done

function name(){

  // console.log('The user\'s name is: ' + userName);
  alert('Welcome to my page, ' + userName + '!');
}
name();

function questionName(){


  let answer1=prompt('Do you know my name? (y/n)');
  let ans1=answer1.toLowerCase();

  if(ans1==='yes' || ans1==='yea' || ans1==='yep' || ans1==='yeah' || ans1==='yup' || ans1==='y'){
  // console.log('The user knows my name.');
    score++;
    alert('Awesome!');
  }else if(ans1==='no' || ans1 ==='nope' || ans1 ==='nah' || ans1==='n'){
  // console.log('The user does not know my name.');
    alert('No worries! Continue, to find out!');
  }else{
  // console.log('Invalid answer.');
    alert('That is not a valid answer.');
  }
}
questionName();

let ans2=prompt('How many cats do I have?').toLowerCase();


if(ans2==2 || ans2=='two'){
  // console.log('correct answer');
  score++;
  alert("That's correct!");
}else{
  // console.log('incorrect answer');
  alert('Good guess '+userName+'! I actually have 2 cats!');
}

let answer3=prompt('Where did I grow up?');
let ans3=answer3.toLowerCase();

if(ans3==='istanbul' || ans3==='istanbul, turkey' || ans3=== 'turkey' || ans3==='turkiye'){
  // console.log('correct answer');
  score++;
  alert("That's correct!");
}else{
  // console.log('incorrect answer');
  alert('I actually grew in Istanbul, Turkey');
}

let answer4=prompt('Guess my favorite beach in Seattle');
let ans4=answer4.toLowerCase();

if(ans4==='golden gardens' || ans4==='golden gardens beach' || ans4==='golden gardens park'){
  // console.log('correct answer');
  score++;
  alert("That's correct!");
}else{
  // console.log('incorrect answer');
  alert('No, but I like that one too!');
}

function eject(){
  let answer5=prompt('Do you want to know more? (y/n)');
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
    alert("I don't understand that answer.");
  }
}
eject();
// guessing game:

function guessinggame(){

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
guessinggame();

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
