
export default class Solver {
  constructor(colorCount = 8, holeCount = 4) {
    this.colorCount = colorCount
    this.holeCount = holeCount
    this.guesses = []
    this.possibilities = this.genAllPossibilities()
  }

  // At random, picks one of the possibilties.
  makeGuess() {
    return this.possibilities.map(
      colors => colors[Math.floor(Math.random() * colors.length)]
    )
  }

  setGuessScore(guess, score) {
    this.guesses.push({ guess, score })
  }

  // Generate an array of all possible colors for each hole.
  genAllPossibilities() {
    return new Array(this.holeCount).fill(0).map(this.genHolePossibilities, this)
  }

  // Generate an array [0, 1, 2, 3, ..., colorCount - 1]
  genHolePossibilities() {
    return new Array(this.colorCount).fill(0).map((_, i) => i)
  }
}
