import React, { FC, useState } from 'react';
import Clock from '../Clock/Clock';
import Counter from '../Counter/Counter';
import Discount from '../Discount/Discount';
import Input from '../Input/Input';
import RandomDiscount from '../RandomDiscount/RandomDiscount';
import Recommendation from '../Recommendation/Recommendation';
import Sale from '../Sale/Sale';
import Specials from '../Specials/Specials';
import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [value, setValue] = useState('');
  const [price, setPrice] = useState(0);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }

  const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setPrice(+e.target.value);
  }

  return(
  <div className={styles.Home}>
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
    {price < 5 && <Clock />}
    <RandomDiscount></RandomDiscount>
  </div>
)};

export default Home;
