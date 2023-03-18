import React, { FC } from 'react';
import Discount from '../../HomeArea/Discount/Discount';
import Specials from '../../HomeArea/Specials/Specials';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={styles.Main}>
    <Discount></Discount>
    <Specials></Specials>
  </main>
);

export default Main;
