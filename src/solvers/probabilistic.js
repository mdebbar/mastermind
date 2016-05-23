/*
Theory:
P(i->j): the probabilty that the peg in position i should be placed in position j.
T: total number of holes.
R: number of correctly placed pegs.
W: number of misplaced pegs.

P(i->i) = R / T
P(i->j) = W / (T * (T - 1))
*/

// TODO: think about flipping probabilities
/*
Theory:
P(i=peg[k]): The probability that hole i has a peg k.
H: total number of holes.
C: total number of peg types (i.e. colors)
R: number of correctly placed pegs.
W: number of misplaced pegs.

          0  1  2  3
(4,5) ->  [] [] [] []   R=1 W=2

 0  1  2  3   4  5    |
 [] [] [] []  [] []   | R=1 W=2
{-----------}         |

P[0->0] = R / H             = 1/4
P[1->0] = W / (H * (H - 1)) = 1/6
P[2->0] = W / (H * (H - 1)) = 1/6
P[3->0] = W / (H * (H - 1)) = 1/6
P[4->0] = 1 / (H * (C - H)) = 1/8
P[5->0] = 1 / (H * (C - H)) = 1/8

// (C - T + 1) is the total number of peg types that can be placed in i
P(i=peg[k]) =
  ?(guess[i] = peg[k])      -> R / (C - T + 1)
  ?(guess.contains(peg[k])) -> 

*/

export default function createSolver(holes, colors) {
  /**
   * The computed probabilities look like:
   * [
   *   [.5, 0, .25, .25] // Probability list of peg0
   *   ...
   * ]
   * A probability row contains the list of probabilities for one peg type (i.e. color).
   * The above row means that peg0 has 0.5 probability of being in hole0, and 0 probability of being
   * in hole1, etc.
   */
  function computeProbabilities(history) {
    const H = holes
    const C = colors
    const probs = new Array(C).fill(new Array(H).fill(1 / H))
    if (history.length > 0) {
      const { guess, score } = history[history.length - 1]
      const R = score.red
      const W = score.white
      guess.forEach((peg, ii) => {
        probs[peg] = new Array(H)
        for (let i = 0; i < H; i++) {
          probs[peg][i] = i === ii
            ? R / H
            : W / (H * (H - 1))
        }
      })
    }
    return probs
  }

  return function solve(history) {
    const probs = computeProbabilities(history)
    return probs
  }
}
