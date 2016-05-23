import { expect } from 'chai'
import Guess from '../src/solvers/guess'

const COMBINATIONS = [
   /*  guess */  /* correct */     /* score */
  [[6, 4, 7, 5], [3, 1, 0, 2], { red: 0, white: 0 }],
  [[7, 1, 5, 4], [3, 1, 0, 2], { red: 1, white: 0 }],
  [[3, 4, 0, 6], [3, 1, 0, 2], { red: 2, white: 0 }],
  [[4, 1, 0, 2], [3, 1, 0, 2], { red: 3, white: 0 }],
  [[3, 1, 0, 2], [3, 1, 0, 2], { red: 4, white: 0 }],
  [[1, 6, 4, 7], [3, 1, 0, 2], { red: 0, white: 1 }],
  [[4, 6, 3, 2], [3, 1, 0, 2], { red: 1, white: 1 }],
  [[3, 2, 0, 6], [3, 1, 0, 2], { red: 2, white: 1 }],
  [[6, 0, 1, 4], [3, 1, 0, 2], { red: 0, white: 2 }],
  [[2, 1, 4, 0], [3, 1, 0, 2], { red: 1, white: 2 }],
  [[2, 1, 0, 3], [3, 1, 0, 2], { red: 2, white: 2 }],
  [[1, 0, 5, 3], [3, 1, 0, 2], { red: 0, white: 3 }],
  [[1, 0, 3, 2], [3, 1, 0, 2], { red: 1, white: 3 }],
  [[1, 0, 2, 3], [3, 1, 0, 2], { red: 0, white: 4 }],
]

describe('Guess.computeScore', () => {
  it('knows correct number of reds and whites', () => {
    COMBINATIONS.forEach(([guess, correct, score]) => {
      expect(Guess.computeScore(guess, correct)).to.deep.eq(score)
    })
  })
})
