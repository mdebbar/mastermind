import { isGuessOk } from '../utils'

function randomGuess(holeCount, colorCount) {
  return new Array(holeCount).fill(0).map(
    () => Math.floor(Math.random() * colorCount)
  )
}

function nextGuess(guess, colorCount) {
  var result = guess.slice()
  var i = guess.length
  var remainder = 1
  while (remainder > 0) {
    i--
    result[i] += remainder
    remainder = 0
    if (result[i] >= colorCount) {
      result[i] = 0
      remainder = 1
    }
  }
  return result
}

function nextValidGuess(guess, colorCount, history) {
  var newGuess = guess
  while (!isGuessOk(newGuess, history)) {
    newGuess = nextGuess(newGuess, colorCount)
  }
  return newGuess
}

// TODO: we need to stop when there is no possible solution.
export default function* solve(holeCount, colorCount) {
  const history = []
  var guess = randomGuess(holeCount, colorCount)
  while (true) {
    var score = yield guess
    history.push({ guess, score })
    guess = nextValidGuess(guess, colorCount, history)
  }
}
