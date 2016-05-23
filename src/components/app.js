import React, { Component } from 'react'
import Game from './game'

const COLORS = ['red', 'purple', 'blue', 'green', 'yellow', 'pink']

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Mastermind</h1>
        <Game holes={4} colors={COLORS} />
      </div>
    )
  }
}
