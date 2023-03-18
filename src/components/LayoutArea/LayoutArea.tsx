import React, { FC } from 'react';

import Header from './Header/Header';
import Aside from './Aside/Aside';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import styles from './LayoutArea.module.scss';

interface LayoutAreaProps { }

const LayoutArea: FC<LayoutAreaProps> = () => (
    <div className={styles.LayoutArea}>
        <Header></Header>
        <Aside></Aside>
        <Main></Main>
        <Footer></Footer>
    </div>
);

export default LayoutArea;
