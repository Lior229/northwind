import React, { FC, useState } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {}

const Counter: FC<CounterProps> = () =>{
  const [counter, setCounter] = useState(0);

  const increaseCounterHandler = () => {
    setCounter((prevStat)=> prevStat = prevStat + 1)
  }

  const decreaseCounterHandler = () => {
    setCounter((prevStat)=> {
      if (prevStat === 0) return 0;
      return prevStat = prevStat - 1;
    })
  }
  
return(
  <div className={`Box ${styles.Counter}`}>
    <h1>{counter}</h1>
    <div className="buttons">
      <button onClick={increaseCounterHandler}>+</button>
      <button onClick={decreaseCounterHandler}>-</button>
    </div>
  </div>

)}
;

export default Counter;
