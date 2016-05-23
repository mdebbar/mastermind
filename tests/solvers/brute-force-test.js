import { expect } from 'chai'
import Guess from '../../src/guess'
import createSolver from '../../src/solvers/brute-force'

describe('brute-force-solver', () => {
  it('initializes possibilities correctly', () => {
    const code = [2, 3, 0, 1]
    const history = []
    const solve = createSolver(4, 6)

    var found = false
    while (!found) {
      const guess = solve(history)
      // The guess produced by the solver must be compatible with the history.
      expect(Guess.matchesHistory(guess, history)).to.be.true
      const score = Guess.computeScore(guess, code)
      history.push({ guess, score })
      if (score.red === 4) {
        found = true
      }
    }
  })
})
