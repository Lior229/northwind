import React, { FC, useState } from 'react';
import Counter from '../../HomeArea/Counter/Counter';
import Desserts from '../../HomeArea/Desserts/Desserts';
import Discount from '../../HomeArea/Discount/Discount';
import Input from '../../HomeArea/Input/Input';
import Recommendation from '../../HomeArea/Recommendation/Recommendation';
import Sale from '../../HomeArea/Sale/Sale';
import Specials from '../../HomeArea/Specials/Specials';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => {
  const [value, setValue] = useState('');
  const [price, setPrice] = useState(0);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setPrice(+e.target.value);
  }

  return(<main className={styles.Main}>
    <Discount></Discount>
    <Specials></Specials>
    {/* <Desserts></Desserts> */}
    <Recommendation></Recommendation>
    <Sale category="Beverages" percent={10}>
        more data
    </Sale>
    <Sale category="candies" percent={15}>
      <div style={{border: '1px solid red'}}>this is a div</div>
    </Sale>
    <Sale category="ice cream" percent={30}></Sale>
    <Counter/>
    <Input type='text' value={value} onChange={valueChangeHandler}></Input>
    <Input type='number' value={price} onChange={priceChangeHandler} limit={100}></Input>
  </main>
)};

export default Main;
