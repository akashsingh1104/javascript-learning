
let randomNumber = parseInt(Math.random() * 100 + 1); // to generate number

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; //array which will store guesses of user
let numGuess = 1;  //attempts

let playGame = true; //allows to play game

if (playGame) { //check if u are available to play game
  submit.addEventListener('click', function (e) {
    e.preventDefault(); //value ko kahi mt leke jao yhi chahiye
    const guess = parseInt(userInput.value); //takes input
    console.log(guess); 
    validateGuess(guess); //ab value pass krdi next function m
  });
}

function validateGuess(guess) { //to check if entered value is validate
  if (isNaN(guess)) { //jab hum site bnate h to aise validate func kaafi use krte h to check kisi ne validate email ya nmbr daala h ya mhi
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess); //push previus guess in array
    if (numGuess === 11) { //guess remaining khatam hogye
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame(); //aur endgame function ko call krdenge
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) { //it will check if value is high or low
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) { //  guess krega value 1 se 100 k beech h
  userInput.value = '';//user input ki value update krdenge
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() { //to endgame
  userInput.value = ''; //to endgame clear all the input fields
  userInput.setAttribute('disabled', '');//aur koi value add na kr paaye,key value pair k saath likha jaata h
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; 
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() { //to start new game
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {//new game button pe click event lga diya
    randomNumber = parseInt(Math.random() * 100 + 1);//saare value reset krne pagenge to start new game
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

