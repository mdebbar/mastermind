import Guess from '../guess'

/**
 * Returns a stateless function that spits out guesses based on the passed history.
 */
export default function createSolver(holes, colors) {

  function nextGuess(guess) {
    var result = new Array(guess.length)
    var remainder = 1
    for (let i = guess.length - 1; i >= 0; i--) {
      var newPeg = guess[i] + remainder
      remainder = 0
      if (newPeg >= colors) {
        newPeg = 0
        remainder = 1
      }
      result[i] = newPeg
    }
    return result
  }

  function nextValidGuess(guess, history) {
    var newGuess = guess
    while (!Guess.matchesHistory(newGuess, history)) {
      newGuess = nextGuess(newGuess)
    }
    return newGuess
  }

  return function solve(history) {
    const lastGuess = history && history.length > 0
      ? history[history.length - 1].guess
      : Guess.random(holes, colors)
    return nextValidGuess(lastGuess, history)
  }
}
