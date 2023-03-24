import React, { FC, useState } from 'react';
import styles from './RandomDiscount.module.scss';

interface RandomDiscountProps {}

const RandomDiscount: FC<RandomDiscountProps> = () => {
  const [randomdiscount, setRandomDiscount] = useState(0);

  const generateRandomDiscount = (): void =>{
    const random = Math.floor(Math.random() * 100);
    setRandomDiscount(random);
  }

  const discountString = randomdiscount > 0 ? `${randomdiscount}%` : randomdiscount;
  
  return(
  <div className={`Box ${styles.discountString}`}>
    <button onClick={generateRandomDiscount}>Random discount</button>
    RandomDiscount Component: {discountString}
  </div>
)};

export default RandomDiscount;
