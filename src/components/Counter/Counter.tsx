import React, { FC } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {}

const Counter: FC<CounterProps> = () => (
  <div className={styles.Counter}>
    Counter Component
  </div>
);

export default Counter;
