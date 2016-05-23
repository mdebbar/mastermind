import '../stylesheets/history.css'

import React, { Component, PropTypes } from 'react'
import PegRow from './peg-row'
import Score from './score'

export default class HistoryEntry extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    score: PropTypes.object.isRequired,
  }

  render() {
    const { colors, score } = this.props
    return (
      <div className="history-entry">
        <PegRow className="history-pegs" colors={colors} />
        <Score className="history-score" reds={score.red} whites={score.white} />
      </div>
    )
  }
}
