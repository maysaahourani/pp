'use strict';


let scoure=0;
function aboutMe() {

  let username = prompt('what is yourname?');
  alert('WELCOME ' + username + '  to my gessing game throught these few questions try to answer with yes or no only');

  let movie = prompt(username + 'do you think that i like movies ?').toLowerCase();
  console.log(movie);
  //movie.toLowerCase();
  if (movie === 'yes' || movie === 'y') {
    alert('YES  ' + username + ', I like movie specially drama movies');
    scoure++;
  }

  if (movie === 'no' || movie === 'n') {
    alert('thats wrong ' + username + ' , i love them :( ');
  }



  let stud = prompt('AM i a computer engineer ?').toLowerCase();
  console.log(stud);
  //stud.toLowerCase();
  if (stud === 'yes' || stud === 'y') {
    alert('Great ' + username + ' yes i am a computer engineer');
    scoure++;
  }
  if (stud === 'no' || stud === 'n') {
    alert('unfortunatlly wrong answer,I am  the queen of computer engineering :P ');
  }


  let drink = prompt('NOW ' + username + ' do you think that i like coffee ?').toLowerCase();
  console.log(drink);
  //stud.toLowerCase();
  if (drink === 'yes' || drink === 'y') {
    alert('Great ' + username + ' whos dont *.*');
    scoure++;
  }
  if (drink === 'no' || drink === 'n') {
    alert('unfortunatlly wrong answer ' + username + 'you should repeat your calculations :P  ');
  }



  let live = prompt(username + ' AM I from JORDAN ?').toLowerCase();
  console.log(drink);
  //stud.toLowerCase();
  if (live === 'yes' || live === 'y') {
    alert('YES thats sure ' + username + ' JORDAN FIRST');
    scoure++;
  }
  if (live === 'no' || live === 'n') {
    alert('O.o ' + username);
  }


  let age = prompt(username + ' AM I older than 60 years old?').toLowerCase();
  console.log(age);
  //stud.toLowerCase();
  if (age === 'yes' || age === 'y') {
    alert('WHAT THE HELL' + username + ' go and drink your coffee');
  }
  if (age === 'no' || age === 'n') {
    alert('thats ture ' + username + 'i hope i can reach this age in good health  ');
    scoure++;
  }

}











function numberGuess() {
  let number = Math.floor(Math.random() * 10 + 1);

  let countAttmpte = 0;
  let guess = Number(prompt('Welcome to number guess!  Guess a number between 1 and 10'));

  while (guess !== number && countAttmpte < 3) {// start while

    countAttmpte++;
    if (isNaN(guess)) {
      alert('Please insart a number');
      guess = Number(prompt('Welcome to number guess!  Guess a number between 1 and 10'));
    } else if (guess < number) {
      alert('This is low');
      guess = Number(prompt('Welcome to number guess!  Guess a number between 1 and 10'));
    } else if (guess > number) {
      alert('This is high');
      guess = Number(prompt('Welcome to number guess!  Guess a number between 1 and 10'));
    }
  } // end of while
  if (guess !== number) {
    alert('You are wrong ' + number + ' is the number');
  } else if (guess === number) {
    alert('You are right ' + number + ' is the number');
    scoure++;
  }

}








function guessMyFavColor() {

  let answerFavColor = ['red', 'green', 'blue', 'black'];
  let guess = prompt('Welcome to fav color guess!  Guess a color');

  for (let i = 0; i < 5; i++) {

    if (answerFavColor[0] === guess || answerFavColor[1] === guess || answerFavColor[2] === guess || answerFavColor[3] === guess) {
      break;
    }
    guess = prompt('Welcome to fav color guess!  Guess a color');
  }

  if (answerFavColor[0] !== guess && answerFavColor[1] !== guess && answerFavColor[2] !== guess && answerFavColor[3] !== guess) {
    alert('This is my fav color ' + answerFavColor[0] + ' ' + answerFavColor[1] + ' ' + answerFavColor[2] + ' ' + answerFavColor[3]);
  } else {
    alert('Your right ' + answerFavColor[0] + ' ' + answerFavColor[1] + ' ' + answerFavColor[2] + ' ' + answerFavColor[3]);
    scoure++;
  }

}



aboutMe();
numberGuess();
guessMyFavColor();
alert('you\'r scoure is: ' + scoure + ' / 7');

// let numb=prompt('Now , we will play the guessing game number , are you ready choose a number?').toLowerCase();
// console.log(numb);

// let array
// let counting=0;
// let guess=0;
// while(guess==='false')
// {
//   if (numb === 15){

//     alert('GREAT! '+username+'its the one :D');
//     counting++;
//   }
//   if (numb >= 20){
//     alert('too high');
//     numb=prompt('thats wrong answer try a lower number');
//     console.log(numb);
//     counting++;
//   }

//   if(numb <= 10){
//     alert('too low');
//     numb=prompt('thats wrong answer try a higher number');
//     console.log(numb);
//     counting++;
//   }
// }

// let firstName = 'saja';
// let lastName = 'ababneh';
// console.log('full name :'+ firstName +' '+lastName );

// function (firstName,lastName){
//   console.log('full name :'+ firstName +' '+lastName );
//   return 'full name: '+firstName+' '+lastName;
// }
// let color = '';
// let attempts = [];
// do {
//   color = prompt('what is my favourite color?');
//   console.log(color);
//   attempts.push(color);
// }
// while (color !== 'red');
// if (color === 'red') {
//   alert('thats true its red');
//   attempts.push(color);
// }








