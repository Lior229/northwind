import React, { FC } from 'react';
import Desserts from '../../HomeArea/Desserts/Desserts';
import Discount from '../../HomeArea/Discount/Discount';
import Recommendation from '../../HomeArea/Recommendation/Recommendation';
import Specials from '../../HomeArea/Specials/Specials';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={styles.Main}>
    <Discount></Discount>
    <Specials></Specials>
    <Desserts></Desserts>
    <Recommendation></Recommendation>
  </main>
);

export default Main;
