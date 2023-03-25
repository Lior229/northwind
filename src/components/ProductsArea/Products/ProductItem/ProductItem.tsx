import React, { FC } from 'react';
import Product from '../../../../models/Product';
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({product}) => {
  const {price,stock,name} = product;

  return(
    <li className={`Box ${styles.ProductItem}`}>
      <p>name: {name},</p>
      <p> stock: {stock},</p>
      <p> price:{price}</p>
    </li>
)};

export default ProductItem;
