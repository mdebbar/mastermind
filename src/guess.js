/**
 * Each red point means a peg was correctly placed.
 * Each white point means a peg was misplaced.
 */
function computeScore(guess, correct) {
  const updateScore = (score, peg, idx) => {
    const guessIdx = guess.indexOf(peg)
    if (guessIdx === idx) {
      score.red++
    } else if (guessIdx > -1) {
      score.white++
    }
    return score
  }
  return correct.reduce(updateScore, { red: 0, white: 0 })
}

/**
 * Verifies if the given guess matches all the history entries.
 */
function matchesHistory(guess, history) {
  if (!isValid(guess)) {
    return false
  }
  return history.every((entry) => compatibleWithHistoryEntry(guess, entry))
}

/**
 * This works by assuming the given guess is the correct code. Then tries
 * to verify that assumption by computing the score between the history's guess
 * and the given guess. If that score matches the history's score, the assumption
 * is valid.
 */
function compatibleWithHistoryEntry(guess, entry) {
  const score = computeScore(entry.guess, guess)
  return score.red === entry.score.red && score.white === entry.score.white
}

// A valid guess has no duplicates.
function isValid(guess) {
  return !hasDuplicates(guess)
}

function hasDuplicates(guess) {
  const obj = {}
  return guess.some((peg) => {
    if (obj[peg]) {
      return true
    }
    obj[peg] = true
  })
}

function random(holes, colors) {
  var guess = randomNoValidation(holes, colors)
  while (!isValid(guess)) {
    guess = randomNoValidation(holes, colors)
  }
  return guess
}

function randomNoValidation(holes, colors) {
  const guess = new Array(holes)
  for (let i = 0; i < holes; i++) {
    guess[i] = Math.floor(Math.random() * colors)
  }
  return guess
}


export default {
  computeScore,
  matchesHistory,
  isValid,
  random,
}
