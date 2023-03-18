import React, { FC } from 'react';
import styles from './Specials.module.scss';

interface SpecialsProps {}

const Specials: FC<SpecialsProps> = () => (
  <div className={`Box ${styles.Specials}`}>
    Specials  Component
  </div>
);

export default Specials;
