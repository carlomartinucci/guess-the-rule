// @flow
import * as React from 'react';
import styles from './Guess.module.css';

type Props = {
  addGuess: (a, b, c) => void
};

type State = {
  a: string,
  b: string,
  c: string
};

class AddGuessContainer extends React.Component<Props, State> {
  state = {
    a: '',
    b: '',
    c: ''
  }
  setInput = (letter: string) => event => this.setState({ [letter]: event.currentTarget.value })
  addGuess = event => {
    if (this.state.a && this.state.b && this.state.c) {
      this.props.addGuess(this.state.a, this.state.b, this.state.c)
      this.setState({a: '', b: '', c: ''})
    }
  }

  render() {
    return <AddGuess setInput={this.setInput} addGuess={this.addGuess} {...this.state}/>
  }
}

const AddGuess = ({ a, b, c, setInput, addGuess }) => {
  let textInput = React.createRef();

  const handleClick = (event) => {
    addGuess(event)
    textInput.current.focus()
    // window.scrollTo(0, textInput);
  }

  return <div className={styles.container}>
    <div className={styles.guess}><input ref={textInput} autoFocus type='number' className={styles.input} value={a} onChange={setInput('a')}/></div>
    <div className={styles.guess}><input type='number' className={styles.input} value={b} onChange={setInput('b')}/></div>
    <div className={styles.guess}><input type='number' className={styles.input} value={c} onChange={setInput('c')}/></div>
    <div className={styles.guess}><button className={styles.button} onClick={handleClick}>?</button></div>
  </div>
}

export default AddGuessContainer;
