import { expect } from 'chai'
import Guess from '../../src/guess'
import createSolver from '../../src/solvers/brute-force'

function playGame(code, colors) {
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

describe('brute-force-solver', () => {
  it('generates guess until it reaches the correct solution', () => {
    playGame([2, 1, 3, 0], 4)
    playGame([2, 3, 0, 1], 6)
    playGame([7, 1, 3, 0], 8)
    playGame([0, 1, 2, 3], 8)
    playGame([4, 5, 6, 7], 8)
  })

  it('can solve larger problems', () => {
    playGame([2, 19, 10, 0], 20)
    playGame([2, 14, 15, 22], 25)
  })

  it('can solve very large ones', () => {
    playGame([30, 14, 23, 7], 32)
  })
})
