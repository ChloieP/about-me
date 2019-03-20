'use strict';

// eslint-disable-next-line no-redeclare
var name = prompt('Hello! What is your name?');
console.log('Game Player Name');
alert(name + ', thanks for stopping by! Let\'s play a quick game to see how well you know me. The first 5 questions are yes/no.');

var likesSpidersSnakes = prompt('I really like spiders and snakes. Do you agree?').toLowerCase();

if(likesSpidersSnakes === 'no' || likesSpidersSnakes === 'n') {
  alert(name + ', you are right! I prefer ladybugs and leave snakes alone.');
} else if (likesSpidersSnakes === 'yes' || likesSpidersSnakes === 'y'){
  alert(name + ', I do NOT like spiders - dead or alive, and am very cautious around snakes.');
}
console.log('I do not like spiders!');

var likesBeach = prompt('I would rather be at the beach. Do you agree?').toLowerCase();

if(likesBeach === 'yes' || likesBeach === 'y') {
  alert(name + ', you are right! I would rather be at the beach in a hammock.');
} else if(likesBeach === 'no' || likesBeach ==='n'){
  alert(name + ', seriously, I am in an island state of mind most of the time.');
}
console.log('I love the beach!');

var likesFishing = prompt('Do you believe that I love to go fishing any time of the year?').toLowerCase();

if(likesFishing === 'yes' || likesFishing === 'y') {
  alert(name + ', you got it right! I enjoy fishing in sunlight or snow but not in the rain.');
} else if(likesFishing === 'no' || likesFishing === 'n') {
  alert(name + ', guess you do not know me very well. I love fishing!');
}
console.log('Fishing works');

var yesBrain = prompt('Can you believe I am nearly 50/50 right brain/left brain?').toLowerCase();

if(yesBrain === 'yes' || yesBrain === 'y') {
  alert(name + ', I can see you know me well. Just a few more questions left!');
} else if(yesBrain === 'no' || yesBrain === 'n') {
  alert(name + ', surprise! I am a mixed media artist, software developer, and graphic designer! WOW!');
}
console.log('My brain works!');

var noXRayVision = prompt('I have amazing superpowers. Do you think seeing through walls is one of them?').toLowerCase();

if(noXRayVision === 'yes' || noXRayVision === 'y') {
  alert(name + ', REALLY??? Who do you think I am?');
} else {
  alert(name + ', you are right! My superpowers include time management and courage.');
}
console.log('I do not have xray vision.');

var manyStates = parseInt(prompt('Can you guess how many states I have been in? This time you will get 4 attempts. Good luck!'));
var rounds = 1;

if(manyStates === 49) {
  alert(name + ', WOW! You are really good at this game! Congratulations, you are correct!!!');}
while (manyStates !==49 && rounds <= 4) {
  manyStates = parseInt(prompt(name + ', keep trying! That answer was too low or too high.'));
  rounds++;
}
console.log('manyStates works!');

var thanks = ('Thank you for playing! Goodbye, ' + name + ', it was fun to play with you today!');
console.log('Thanks for playing About Me: Chloie!');
alert(thanks);

// var favColors = prompt('Are you able to name at least one of my 3 favorite colors. You have 6 attempts.');
// var roundsColor = 1;
// // Copied from above and applied string values for fav colors, but no logical code yet.
// if(favColors === 'Orange' || favColors === 'Purple' || favColors === 'Turquoise'); {
//   alert(name + ', that is one of my favorite colors! I love highly saturated orange, purple, and turquoise.');
// } else if(favColors === 'Does not GUESS RIGHT') {
//   while (roundsColor <= 6) {
//     alert(name + ', you get to learn something new about me: I love highly saturated orange, purple, and turquoise.');
//     prompt('Keep trying to guess how many states I have lived in. Good luck!');
//     roundsColor++;
//   }
// }
// console.log('favColors works!');
