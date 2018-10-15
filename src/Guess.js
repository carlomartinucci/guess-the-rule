// @flow
import * as React from 'react';
import styles from './Guess.module.css';

export type GuessType = [number, number, number, boolean];

type Props = {
  guess: GuessType
};
const Guess = (props: Props) => {
  const [a, b, c, right] = props.guess

  return <div className={styles.container}>
    <div className={styles.guess}>{a}</div>
    <div className={styles.guess}>{b}</div>
    <div className={styles.guess}>{c}</div>
    <div className={right ? styles.right : styles.wrong}>{right ? 'YES!' : 'NO :('}</div>
  </div>
}

export default Guess;
