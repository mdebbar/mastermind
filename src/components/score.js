import '../stylesheets/scores.css'

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Score extends Component {
  static propTypes = {
    reds: PropTypes.number.isRequired,
    whites: PropTypes.number.isRequired,
  }

  render() {
    const { className, reds, whites } = this.props
    const redSticks = []
    const whiteSticks = []
    for (let i = 0; i < reds; i++) {
      redSticks.push(<span key={i} className="red" />)
    }
    for (let i = 0; i < whites; i++) {
      whiteSticks.push(<span key={i} className="white" />)
    }
    return (
      <div className={classnames(className, 'score')}>
        {redSticks}
        {whiteSticks}
      </div>
    )
  }
}
