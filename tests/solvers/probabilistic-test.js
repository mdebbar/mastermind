// import playGame from '../helpers/play-game'
// import createSolver from '../../src/solvers/probabilistic'

describe('brute-force-solver', () => {
  it('generates guess until it reaches the correct solution', () => {
    // const solve = createSolver(4, 6)
    // console.log(solve([]))
    // console.log(solve([
    //   { guess: [3, 1, 0, 5], score: { red: 1, white: 2 } }
    // ]))

    // playGame(createSolver, [2, 1, 3, 0], 4)
    // playGame(createSolver, [2, 3, 0, 1], 6)
    // playGame(createSolver, [7, 1, 3, 0], 8)
    // playGame(createSolver, [0, 1, 2, 3], 8)
    // playGame(createSolver, [4, 5, 6, 7], 8)
  })

  it('can solve larger problems', () => {
    // playGame(createSolver, [2, 19, 10, 0], 20)
    // playGame(createSolver, [2, 14, 15, 22], 25)
  })

  it('can solve very large ones', () => {
    // playGame(createSolver, [30, 14, 23, 7], 32)
  })
})
