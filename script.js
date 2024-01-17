'use strict';
//=====>>>>Getting HTML Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//=====>>>CONDITIONS BEGINS

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  console.log('hold player');
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//=====>>>>>>Rolling Dice Functionallities

btnRoll.addEventListener('click', function () {
  //1. ======>>>>>>Generating A Random Number For Dice.

  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.=====>>>>Display Dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  ///3.====>>>Check I Rooled Dice Is 1.

  if (dice !== 1) {
    /// Add Dice To CurrentScore
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch To Next Player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;

    // currentScore = 0;

    switchPlayer();

    //TERNNERY OPPERATOR SOLUTION
    //activePlayer = activePlayer === 0 ? 1 : 0;

    //ANOTHER SOLUTION >>>>>>>>> EASY WAY "IF ELSE".......

    // if(activePlayer === 0){
    //   activePlayer = 1
    // } else{
    //   activePlayer = 0;
    // }
    // player0El.classList.toggle('player--active');
    // player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  //1. Add current score to active plsye's score.
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Check if active player's score is >= 100......
  // if so...... Finish the game

  ///.....If not! Switch to the next player
  switchPlayer();
});
