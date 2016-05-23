import { expect } from 'chai'
import Guess from '../src/solvers/guess'

describe('Guess.random', () => {
  it('generates random guesses', () => {
    const HOLES = 4
    const COLORS = 6
    const TIMES = 10000

    for (let k = 0; k < TIMES; k++) {
      const guess = Guess.random(HOLES, COLORS)
      expect(guess).to.have.length.of(HOLES)
      expect(Guess.isValid(guess)).to.be.true
      for (let i = 0; i < HOLES; i++) {
        const peg = guess[i]
        expect(peg).to.be.at.least(0)
        expect(peg).to.be.below(COLORS)
      }
    }
  })
})
