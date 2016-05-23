import { expect } from 'chai'
import Guess from '../../src/solvers/guess'

export default function playGame(createSolver, code, colors) {
  const solve = createSolver(code.length, colors)
  const history = []
  var found = false
  while (!found) {
    const guess = solve(history)
    // The guess produced by the solver must be compatible with the history.
    expect(Guess.matchesHistory(guess, history)).to.be.true
    const score = Guess.computeScore(guess, code)
    history.push({ guess, score })
    // console.log(`Guess #${history.length}: [${guess.join(' - ')}] ==> R:${score.red} W:${score.white}`)
    if (score.red === 4) {
      // console.log(`Found code in ${history.length} steps!`)
      found = true
    }
  }
}
