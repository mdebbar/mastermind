import Guess from '../guess'

/**
 * Returns a stateless function that spits out guesses based on the passed history.
 */
export default function createSolver(holes, colors) {

  function nextGuess(guess) {
    var result = guess.slice()
    var i = guess.length
    var remainder = 1
    while (remainder > 0) {
      i--
      result[i] += remainder
      remainder = 0
      if (result[i] >= colors) {
        result[i] = 0
        remainder = 1
      }
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
