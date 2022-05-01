const scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const diceElement = document.querySelector('.dice');
diceElement.classList.add('dice--hidden');

function hideDice () {
  diceElement.classList.add('dice--hidden');
}

function showDice(dice) {
  diceElement.classList.remove('dice--hidden');
  diceElement.src = `dice-${dice}.png`;
}

function nextPlayer() {
  let currentScore = document.querySelector(`#current--${activePlayer}`);
  currentScore.textContent = roundScore;
  roundScore = 0;
  currentScore.textContent = roundScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  setTimeout(hideDice, 500)
}

function disableButtons() {
  btnHold.classList.add('btn--roll--disabled')
  btnRollDice.classList.add('btn--hold--disabled')
  btnHold.disabled = true
  btnRollDice.disabled = true
}

function enableButtons() {
  btnHold.classList.remove('btn--roll--disabled')
  btnRollDice.classList.remove('btn--hold--disabled')
  btnHold.disabled = false
  btnRollDice.disabled = false
}

function newGame() {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector(`#name--${activePlayer}`).textContent = `Player ${activePlayer + 1}`
  scores[0] = 0
  scores[1] = 0
  roundScore = 0
  activePlayer = 0
  hideDice()
  document.querySelector(`#current--0`).textContent = '0'
  document.querySelector(`#current--1`).textContent = '0'
  document.querySelector(`#score--0`).textContent = '0'
  document.querySelector(`#score--1`).textContent = '0'
  enableButtons()
}

btnRollDice.addEventListener('click', function () {
  let currentScore = document.querySelector(`#current--${activePlayer}`);
  const dice = Math.ceil(Math.random() * 6);
  showDice(dice);
  if (dice !== 1) {
    roundScore += dice;
    currentScore.textContent = roundScore;
  } else {
    nextPlayer();
    
  }
});

btnHold.addEventListener('click', () => {
  scores[activePlayer] += roundScore;
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
  if(scores[activePlayer] >= 20) {
    hideDice()
    document.querySelector(`#name--${activePlayer}`).textContent = 'Winner!'
    disableButtons()
  } else {
  nextPlayer();}
})

btnNewGame.addEventListener('click', newGame)


