import { expect } from 'chai'
import { computeScore, isGuessOk } from '../../src/utils'
import solve from '../../src/solvers/brute-force'

describe('brute-force-solver', () => {
  it('initializes possibilities correctly', () => {
    const code = [2, 3, 0, 1]
    const history = []
    const iter = solve(4, 6)

    var next = iter.next()
    var i = 1
    while (!next.done) {
      // The guess produced by the solver must be compatible with the history.
      expect(isGuessOk(next.value, history)).to.be.true
      const score = computeScore(next.value, code)
      console.log('Game ' + i++)
      console.log(next.value, ' ==> ', score)
      history.push({ guess: next.value, score })
      if (score.red === 4) {
        console.log(`Found solution in ${history.length} steps!`)
        break
      }
      next = iter.next(score)
    }
  })
})
