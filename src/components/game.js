import React, { Component, PropTypes } from 'react'
import HistoryEntry from './history-entry'
import createSolver from '../solvers/brute-force'

export default class Game extends Component {
  static propTypes = {
    holes: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
  }

  state = {
    // history: [],
    history: [
      { guess: [3, 0, 1, 2], score: { red: 1, white: 2 } },
      { guess: [0, 1, 5, 3], score: { red: 0, white: 3 } },
    ],
  }

  componentWillMount() {
    this.solve = createSolver()
  }

  componentWillUnmount() {
    this.solve = null
  }

  render() {
    const { history } = this.state
    return (
      <div className="game">
        {history.map((entry, i) =>
          <HistoryEntry key={i} colors={this.getPegColors(entry.guess)} score={entry.score} />
        )}
      </div>
    )
  }

  getPegColors(guess) {
    const { colors } = this.props
    return guess.map(peg => colors[peg])
  }
}
