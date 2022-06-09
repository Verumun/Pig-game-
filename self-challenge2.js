'use strict'

// ------Selecting Elements------
// players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const totalScore0El = document.getElementById('score--0');
const totalScore1El = document.getElementById('score--1');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

// selecting Dice
const dice = document.querySelector('.dice');



// Selecting Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Setting initail Values
totalScore0El.textContent = 0;
totalScore1El.textContent = 0;
// hiding dice
dice.classList.add('hidden');

// creating a temporary current score
let score = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let playing = true;

// 
btnRoll.addEventListener('click', function(){
    if (playing){
            // generate random dice roll
        const randomDice = Math.trunc(Math.random()*6)+1;

        // display dice
        dice.classList.remove('hidden');
        dice.src = `dice-${randomDice}.png`;

        // check if dice value not 1
        if(randomDice !== 1){
            score = randomDice + score;
        document.getElementById(`current--${activePlayer}`).textContent = score;
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // if it's == 1 switch player
        }else{
            score = 0;
            // score = randomDice + score; this complicated things
            document.getElementById(`current--${activePlayer}`).textContent = score;
            activePlayer = activePlayer === 0 ? 1 : 0;

            // changing background color
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }

});

// ---Button Hold functionality
btnHold.addEventListener('click', function(){
    if(playing){

    
        totalScore[activePlayer] += score;
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];


        // checking for winner
        if(totalScore[activePlayer] >= 10){
            playing = false;
            // console.log('red');
            // Change Background-color
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }else{
            // playing = false;
            score = 0;
            document.getElementById(`current--${activePlayer}`).textContent = score;
            activePlayer = activePlayer === 0 ? 1 : 0;

            // changing background color
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }

    }
});

// ----Button New-----
btnNew.addEventListener('click', function(){

    playing = true;

    dice.classList.add('hidden');

    score = 0;
    activePlayer = 0;
    totalScore = [0, 0];

    totalScore0El.textContent = 0;
    totalScore1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

});

