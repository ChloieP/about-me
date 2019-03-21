'use strict';
var score = 0;

// eslint-disable-next-line no-redeclare
var name = prompt('Hello! What is your name?');
console.log('Game Player Name');
alert(name + ', thanks for stopping by! Let\'s play a quick game to see how well you know me. The first 5 questions are yes/no.');

var likesSpidersSnakes = prompt('I really like spiders and snakes. Do you agree?').toLowerCase();

if(likesSpidersSnakes === 'no' || likesSpidersSnakes === 'n') {
  alert(name + ', you are right! I prefer ladybugs and leave snakes alone.');
  score++;
} else if (likesSpidersSnakes === 'yes' || likesSpidersSnakes === 'y'){
  alert(name + ', I do NOT like spiders - dead or alive, and am very cautious around snakes.');
}
console.log('I do not like spiders!');

var likesBeach = prompt('I would rather be at the beach. Do you agree?').toLowerCase();

if(likesBeach === 'yes' || likesBeach === 'y') {
  alert(name + ', you are right! I would rather be at the beach in a hammock.');
  score++;
} else if(likesBeach === 'no' || likesBeach ==='n'){
  alert(name + ', seriously, I am in an island state of mind most of the time.');
}
console.log('I love the beach!');

var likesFishing = prompt('Do you believe that I love to go fishing any time of the year?').toLowerCase();

if(likesFishing === 'yes' || likesFishing === 'y') {
  alert(name + ', you got it right! I enjoy fishing in sunlight or snow but not in the rain.');
  score++;
} else if(likesFishing === 'no' || likesFishing === 'n') {
  alert(name + ', guess you do not know me very well. I love fishing!');
}
console.log('Fishing works');

var yesBrain = prompt('Can you believe I am nearly 50/50 right brain/left brain?').toLowerCase();

if(yesBrain === 'yes' || yesBrain === 'y') {
  alert(name + ', I can see you know me well. Just a few more questions left!');
  score++;
} else if(yesBrain === 'no' || yesBrain === 'n') {
  alert(name + ', surprise! I am a mixed media artist, software developer, and graphic designer! WOW!');
}
console.log('My brain works!');

var noXRayVision = prompt('I have amazing superpowers. Do you think seeing through walls is one of them?').toLowerCase();

if(noXRayVision === 'yes' || noXRayVision === 'y') {
  alert(name + ', REALLY??? Who do you think I am?');
} else {
  alert(name + ', you are right! My superpowers include time management and courage.');
  score++;
}
console.log('I do not have xray vision.');

var manyStates = parseInt(prompt('Can you guess how many states I have been in? This time you will get 4 attempts. Good luck!'));
var rounds = 1;

if(manyStates === 49) {
  alert(name + ', WOW! You are really good at this game! Congratulations, you are correct!!!');}
score++;
while (manyStates !==49 && rounds <= 4) {
  manyStates = parseInt(prompt(name + ', keep trying! That answer was too low or too high.'));
  rounds++;
}
console.log('manyStates works!');

var favColors = ['orange', 'purple', 'turquoise'];
var roundsColor = 1;
var forceTrue = true;

while(forceTrue === true){
  var guessColors = prompt('Are you able to name at least one of my 3 favorite colors. You have 6 attempts.').toLowerCase();
  if(guessColors === favColors [0] || guessColors === favColors [1] || guessColors === favColors [2]){
    alert(name + ', I am amazed you guessed the right color! My favorite 3 colors are highly saturated orange, purple, and turquoise.');
    score++;
    forceTrue = false;
  }
  else if (roundsColor >= 6)
    alert('Sorry, you lose! My favorite 3 colors are highly saturated orange, purple, and turquoise.');
  roundsColor++;
  forceTrue = false;
}

console.log(favColors[0]);
console.log(favColors[2]);

var thanks = ('Thank you for playing! Today, ' + name + ', you scored ' + score + ' out of 7!');
console.log('Thanks for playing About Me: Chloie!');
alert(thanks);
