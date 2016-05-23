import { expect } from 'chai'
import Guess from '../src/guess'

describe('Guess.matchesHistory', () => {
  it('accepts any guess if history is empty', () => {
    expect(Guess.matchesHistory([0, 1, 2, 3], [])).to.be.true
    expect(Guess.matchesHistory([1, 0, 4, 9], [])).to.be.true
  })

  it('refuses guesses with duplicates', () => {
    expect(Guess.matchesHistory([0,1,2,1], [])).to.be.false
    expect(Guess.matchesHistory([0,2,2,1], [])).to.be.false
    expect(Guess.matchesHistory([0,2,0,0], [])).to.be.false
  })

  it('accepts guesses that are compatible with all history entries', () => {
    // This is a history list of correct guesses.
    const history = [
      { guess: [3, 1, 0, 2], score: { red: 1, white: 1 } },
      { guess: [0, 5, 4, 2], score: { red: 0, white: 3 } },
      { guess: [6, 2, 0, 4], score: { red: 0, white: 2 } },
      { guess: [4, 1, 2, 5], score: { red: 4, white: 0 } },
    ]

    for (let i = 0; i < history.length; i++) {
      expect(Guess.matchesHistory(history[i].guess, history.slice(0, i))).to.be.true
    }

    // Some wrong guesses
    expect(Guess.matchesHistory([3, 1, 0, 2], history)).to.be.false
    expect(Guess.matchesHistory([0, 6, 2, 4], history)).to.be.false
    expect(Guess.matchesHistory([3, 5, 2, 6], history)).to.be.false
    expect(Guess.matchesHistory([4, 1, 2, 0], history)).to.be.false
    expect(Guess.matchesHistory([0, 1, 2, 4], history)).to.be.false
    expect(Guess.matchesHistory([0, 1, 2, 3], history)).to.be.false
    expect(Guess.matchesHistory([2, 1, 4, 0], history)).to.be.false
  })
})
