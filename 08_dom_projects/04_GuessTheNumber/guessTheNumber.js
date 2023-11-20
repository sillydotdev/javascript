let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    //
    if(isNaN(guess)) {
        alert("Please enter a number.")
    }else if(guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    }
    else{
        prevGuess.push(guess);
        if(numOfGuesses > 10) {
            displayGuess(guess);
            displayMessage(`Game over... Random number was: ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// This function checks whether the guess is equal to random number generated or less or higher than the random number.
function checkGuess(guess) {
    if(randomNumber === guess) {
        displayMessage(`Congratulations.... You guessed it right...`);
        endGame();
    }
    else if(guess < randomNumber) {
        displayMessage(`Guess is LOW...`);
        endGame();
    }
    else{
        displayMessage(`Number is HIGH...`);
        endGame();
    }
}

// This function displays the guesses you entered and the number of remaining guesses.
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numOfGuesses++;
    remaining.innerHTML = `${11 - numOfGuesses}`;
}

// This function displays the message declared in checkGuess() method
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id = "newGame">New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('.newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuesses = 1;
        remaining.innerHTML = `${11 - numOfGuesses}`;
        guessSlot.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}

