export function computeScore(guess, correct) {
  const score = { red: 0, white: 0 }
  for (let i = 0; i < correct.length; i++) {
    const color = correct[i]
    const guessIdx = guess.indexOf(color)
    if (guessIdx === i) {
      score.red++
    } else if (guessIdx > -1) {
      score.white++
    }
  }
  return score
}

export function isGuessCompatible(guess, historyEntry) {
  const newScore = computeScore(historyEntry.guess, guess)
  return newScore.red === historyEntry.score.red && newScore.white === historyEntry.score.white
}

function hasDuplicates(guess) {
  const obj = {}
  for (let i = 0; i < guess.length; i++) {
    if (obj[guess[i]]) {
      return true
    }
    obj[guess[i]] = 1
  }
  return false
}

/**
 * Looks at the history of (guess, score) pairs and makes sure the new guess is compatible
 * with all of them.
 */
export function isGuessOk(guess, history) {
  if (hasDuplicates(guess)) {
    return false
  }

  for (let i = 0; i < history.length; i++) {
    const entry = history[i]
    if (!isGuessCompatible(guess, entry)) {
      return false
    }
  }
  return true
}
