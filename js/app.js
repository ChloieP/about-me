'use strict';

// eslint-disable-next-line no-redeclare
var name = prompt('Hello! What is your name?');
console.log(name);
alert(name + ', thanks for stopping by! Let\'s play a quick 5 question yes/no game to see how well you know me.');

var likesSpidersSnakes = prompt('I really like spiders and snakes. Do you agree?').toLowerCase();

if(likesSpidersSnakes === 'no' || likesSpidersSnakes === 'n') {
  alert(name + ', you are right! I prefer ladybugs and leave snakes alone.');
} else if (likesSpidersSnakes === 'yes' || likesSpidersSnakes === 'y'){
  alert(name + ', I do NOT like spiders - dead or alive, and am very cautious around snakes.');
}
console.log(likesSpidersSnakes);

var likesBeach = prompt('I would rather be at the beach. Do you agree?').toLowerCase();

if(likesBeach === 'yes' || likesBeach === 'y') {
  alert(name + ', you are right! I would rather be at the beach in a hammock.');
} else if(likesBeach === 'no' || likesBeach ==='n'){
  alert(name + ', seriously, I am in an island state of mind most of the time.');
}
console.log(likesBeach);

var likesFishing = prompt('Do you believe that I love to go fishing any time of the year?').toLowerCase();

if(likesFishing === 'yes' || likesFishing === 'y') {
  alert(name + ', you got it right! I enjoy fishing in sunlight or snow but not in the rain.');
} else if(likesFishing === 'no' || likesFishing === 'n') {
  alert(name + ', guess you do not know me very well. I love fishing!');
}
console.log(likesFishing);

var yesBrain = prompt('Can you believe I am nearly 50/50 right brain/left brain?').toLowerCase();

if(yesBrain === 'yes' || yesBrain === 'y') {
  alert(name + ', I can see you know me well. Just one more question left!');
} else if(yesBrain === 'no' || yesBrain === 'n') {
  alert(name + ', surprise! I am a mixed media artist, software developer, and graphic designer! WOW!');
}
console.log(yesBrain);

var noXRayVision = prompt('I have amazing superpowers. Do you think seeing through walls is one of them?').toLowerCase();

if(noXRayVision === 'yes' || noXRayVision === 'y') {
  alert(name + ', REALLY??? Who do you think I am?');
} else {
  alert(name + ', you are right! My superpowers include time management and courage.');
}
console.log(noXRayVision);

var thanks = ('Thank you for playing! Goodbye, ' + name + ', it was fun to play with you today!');
console.log(thanks);
alert(thanks);
