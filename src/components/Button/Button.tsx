import React, { Children, FC, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({children}) => (
  <button className={styles.Button}>
    {children}
  </button>
);

export default Button;
