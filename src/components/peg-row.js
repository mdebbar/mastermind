import '../stylesheets/pegs.css'

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class PegRow extends Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  }

  render() {
    const { className, colors } = this.props
    return (
      <div className={classnames(className, 'peg-row')}>
        {colors.map(peg => <Peg key={peg} color={peg} />)}
      </div>
    )
  }
}

const Peg = ({ color }) =>
  <span className={classnames(color, 'peg')} />
