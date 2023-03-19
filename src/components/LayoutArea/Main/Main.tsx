import React, { FC } from 'react';
import Desserts from '../../HomeArea/Desserts/Desserts';
import Discount from '../../HomeArea/Discount/Discount';
import Recommendation from '../../HomeArea/Recommendation/Recommendation';
import Sale from '../../HomeArea/Sale/Sale';
import Specials from '../../HomeArea/Specials/Specials';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={styles.Main}>
    <Discount></Discount>
    <Specials></Specials>
    <Desserts></Desserts>
    <Recommendation></Recommendation>
    <Sale category="Beverages" percent={10}>
        more data
    </Sale>
    <Sale category="candies" percent={15}>
      <div style={{border: '1px solid red'}}>this is a div</div>
    </Sale>
    <Sale category="ice cream" percent={30}></Sale>
  </main>
);

export default Main;
