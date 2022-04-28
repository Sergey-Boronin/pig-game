const scores = [0, 0]
let roundScore = 0;
let activePlayer = 0





const btnRollDice = document.querySelector('.btn--roll')
const diceElement = document.querySelector('.dice')
diceElement.classList.add('dice--hidden')

function showDice(dice) {
  diceElement.classList.remove('dice--hidden')
  diceElement.src = `dice-${dice}.png`
}

btnRollDice.addEventListener('click', function () {
  let currentScore = document.querySelector(`#current--${activePlayer}`)
  const dice = Math.ceil(Math.random() * 6)
  showDice(dice)
  
  if(dice !== 1 ) {
    roundScore += dice
  } else {

  }
}) 