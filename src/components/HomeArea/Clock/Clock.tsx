import React, { FC, useEffect, useState } from 'react';
import styles from './Clock.module.scss';

interface ClockProps {}

const Clock: FC<ClockProps> = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

useEffect(() =>{

  const id = setInterval(()=>{
    console.log("timer");
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    setTime(currentTime);
  },1000);

  return () => {
    //cleanup function
    console.log("cleanup function");
    clearInterval(id);
  }
},[])

return(
  <div className={`Box ${styles.Clock}`}>
    Clock Component: {time}
  </div>
)};

export default Clock;
