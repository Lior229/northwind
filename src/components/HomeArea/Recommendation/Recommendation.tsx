import React, { FC } from 'react';
import styles from './Recommendation.module.scss';

interface RecommendationProps {}

const Recommendation: FC<RecommendationProps> = () => {
  const firstClickHandler = () => {
    console.log("Coffee");
  }

  const SecondClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  }

  const ThirdClickHandler = (id:string) => {
    console.log(id);
  }

  return(
  <div className={`Box ${styles.Recommendation}`}>
    Recommendation Component
    <button onClick={firstClickHandler} className='Box'>First</button>
    <button onClick={SecondClickHandler} className='Box'>Second</button>
    <button onClick={() => ThirdClickHandler("this is id")} className='Box'>Third</button>
  </div>
)};

export default Recommendation;
