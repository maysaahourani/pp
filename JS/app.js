'use strict' ;
/*let username=prompt('what is yourname?');
alert('WELCOME '+username+ '  to my gessing game throught these few questions try to answer with yes or no only');

let movie=prompt(username +'do you think that i like movies ?').toLowerCase();
console.log(movie);
//movie.toLowerCase();
if (movie==='yes'||movie==='y')
{
  alert ('YES  ' + username+ ', I like movie specially drama movies') ;
}

if (movie==='no'|| movie==='n')
{
  alert ( 'thats wrong '+username +' , i love them :( ');
}



let stud=prompt('AM i a computer engineer ?').toLowerCase();
console.log(stud);
//stud.toLowerCase();
if(stud==='yes'||stud==='y')
{
  alert ('Great '+ username+' yes i am a computer engineer');
}
if(stud==='no'||stud ==='n')
{
  alert('unfortunatlly wrong answer,I am  the queen of computer engineering :P ');
}


let drink =prompt('NOW '+username+' do you think that i like coffee ?').toLowerCase();
console.log(drink);
//stud.toLowerCase();
if(drink==='yes'|| drink==='y')
{
  alert ('Great '+ username+' whos dont *.*');
}
if(drink==='no'|| drink==='n')
{
  alert('unfortunatlly wrong answer '+username+ 'you should repeat your calculations :P  ');
}



let live =prompt(username+' AM I from JORDAN ?').toLowerCase();
console.log(drink);
//stud.toLowerCase();
if(live==='yes'||live==='y')
{
  alert ('YES thats sure '+ username+' JORDAN FIRST');
}
if(live==='no'||live==='n')
{
  alert('O.o '+username);
}


let age =prompt(username+' AM I older than 60 years old?').toLowerCase();
console.log(age);
//stud.toLowerCase();
if(age==='yes'|| age==='y')
{
  alert ('WHAT THE HELL'+ username+' go and drink your coffee');
}
if(age==='no'||age==='n')
{
  alert('thats ture '+ username+ 'i hope i can reach this age in good health  ');
}

function numberGuess () {
  let number = Math.floor(Math.random() * 10 + 1);

  let totalGuesses = []; // Array to stores all the guesses
  let guess = prompt('Welcome to number guess!  Guess a number between 1 and 10');
  while ((guess !== number) && (totalGuesses.length<4)) {
    if (!guess) { // User cancels prompts
      return;
    }
    else if (totalGuesses.indexOf(guess) >= 0) { // Checks to see if guess has already been guessed
      guess = prompt ('You already guessed that number before.  Give me another guess.');
    }
    else {
      totalGuesses.push(guess);
      if (guess > number) {
        guess = prompt (' too high.  Try Again.  Dont give up!');
      }

      else {
        guess = prompt (' too low.  Try Again.  I know you can do it!');
      }
    }
  }
  // Guess is corr

  alert('Congratulations!  You guessed the number!  It took you  '+ (totalGuesses.length +1) + ' attempts!');
}

numberGuess();
/*let numb=prompt('Now , we will play the guessing game number , are you ready choose a number?').toLowerCase();
console.log(numb);

//let array
let counting=0;
let guess=0;
while(guess==='false')
{
  if (numb === 15){

    alert('GREAT! '+username+'its the one :D');
    counting++;
  }
  if (numb >= 20){
    alert('too high');
    numb=prompt('thats wrong answer try a lower number');
    console.log(numb);
    counting++;
  }

  if(numb <= 10){
    alert('too low');
    numb=prompt('thats wrong answer try a higher number');
    console.log(numb);
    counting++;
  }
}
*/
// let firstName = 'saja';
// let lastName = 'ababneh';
// console.log('full name :'+ firstName +' '+lastName );

// function (firstName,lastName){
//   console.log('full name :'+ firstName +' '+lastName );
//   return 'full name: '+firstName+' '+lastName;
// }
let color='';
let attempts =[];
do {color = prompt('what is my favourite color?');
  console.log(color);
  attempts.push(color);
}
while ( color !== 'red');
if (color==='red'){
  alert('thats true its red');
  attempts.push(color);
}
alert('you did '+attempts.length-- +'attempts to guess my favourit color');







