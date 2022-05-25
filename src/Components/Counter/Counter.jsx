import React, { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className={styles.Counter}>
        <button onClick={() => setCount(count-1)}>-</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
    </div>
  );
};

export default Counter