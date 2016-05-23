/*
Theory:
P(i->j): the probabilty that the peg in position i should be placed in position j.
t: total number of holes.
r: number of correctly placed pegs.
w: number of misplaced pegs.

P(i->i) = r/t
P(i->j) = w/(t * (t - 1))
*/
