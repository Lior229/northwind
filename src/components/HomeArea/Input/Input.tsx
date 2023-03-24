import React, { FC, useState } from 'react';
import { Value } from 'sass';
import styles from './Input.module.scss';

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type: string;
  limit?: number;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({type, limit, value, onChange}) => {
  return <input type={type} value={value} maxLength={limit} onChange={onChange} />
};

export default Input;
