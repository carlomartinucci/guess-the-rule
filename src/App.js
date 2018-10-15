// @flow
import * as React from 'react';
import styles from './App.module.css';
import Guess from './Guess'
import type GuessType from './Guess';
import AddGuess from './AddGuess'

type State = {
  guesses: Array<GuessType>
};

class App extends React.Component<{}, State> {
  state = {
    guesses: [
      [2, 4, 8, true]
    ]
  }
  addGuess = (a, b, c) => this.setState(state => ({ guesses: [...state.guesses, [a, b, c, a < b]]}))

  render() {
    return (
      <div className={styles.container}>
        {this.state.guesses.map((guess, i) => <Guess key={i} guess={guess}/>)}
        <AddGuess addGuess={this.addGuess} />
      </div>
    );
  }
}

export default App;
