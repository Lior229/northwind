import React, { FC } from 'react';
import styles from './PageNotFound.module.scss';

interface PageNotFoundProps {}

const PageNotFound: FC<PageNotFoundProps> = () => (
  <div className={styles.PageNotFound}>
    <p>the page not found</p>
  </div>
);

export default PageNotFound;
