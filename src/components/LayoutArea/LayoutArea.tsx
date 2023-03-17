import React, { FC } from 'react';
import styles from './LayoutArea.module.scss';

interface LayoutAreaProps { }

const LayoutArea: FC<LayoutAreaProps> = () => (
    <div className={styles.LayoutArea}>
        <header>header</header>
        <aside>aside</aside>
        <main>main</main>
        <footer>footer</footer>
    </div>
);

export default LayoutArea;
