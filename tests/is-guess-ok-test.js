import { expect } from 'chai'
import { isGuessOk } from '../src/utils'

describe('isGuessOk', () => {
  it('any guess is ok when history is empty', () => {
    expect(isGuessOk([0, 1, 2, 3], [])).to.be.true
    expect(isGuessOk([1, 0, 4, 9], [])).to.be.true
  })

  it('refuses guesses with duplicates', () => {
    expect(isGuessOk([0,1,2,1], [])).to.be.false
    expect(isGuessOk([0,2,2,1], [])).to.be.false
    expect(isGuessOk([0,2,0,0], [])).to.be.false
  })

  it('returns true only when guess is compatible with all history', () => {
    // This is a history list of correct guesses.
    const history = [
      { guess: [3, 1, 0, 2], score: { red: 1, white: 1 } },
      { guess: [0, 6, 2, 4], score: { red: 1, white: 1 } },
      { guess: [3, 5, 2, 6], score: { red: 1, white: 1 } },
      { guess: [4, 1, 2, 5], score: { red: 4, white: 0 } },
    ]

    for (let i = 0; i < history.length; i++) {
      expect(history[i], history.slice(0, i))
    }

    // Some wrong guesses
    expect(isGuessOk([3, 1, 0, 2], history)).to.be.false
    expect(isGuessOk([0, 6, 2, 4], history)).to.be.false
    expect(isGuessOk([3, 5, 2, 6], history)).to.be.false
    expect(isGuessOk([4, 1, 2, 0], history)).to.be.false
    expect(isGuessOk([0, 1, 2, 4], history)).to.be.false
    expect(isGuessOk([0, 1, 2, 3], history)).to.be.false
    expect(isGuessOk([2, 1, 4, 0], history)).to.be.false
  })
})
