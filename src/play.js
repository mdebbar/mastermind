import createSolver from './solvers/brute-force'
import Guess from './guess'


export default function play(code, colors = 6) {
  const history = []
  const solve = createSolver(code.length, colors)

  var found = false
  while (!found) {
    const guess = solve(history)
    const score = Guess.computeScore(guess, code)
    history.push({ guess, score })
    console.log(
      `Guess #${history.length}: [${guess.join(' - ')}]  ==>  R:${score.red}, W:${score.white}`
    )
    if (score.red === 4) {
      console.log(`Found code in ${history.length} steps!`)
      found = true
    }
  }
}
