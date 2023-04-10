import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from '../../../models/Product';
import AddProduct from '../AddProduct/AddProduct';
import ProductItem from './ProductItem/ProductItem';
import styles from './Products.module.scss';

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({products}) => {
  const [showAddProduct, setShowAddProduct]=useState(false);

  const modalToggleHandler = () =>{
      setShowAddProduct((prevState)=> !prevState);
  }

  const renderProducts = () => {
    return products.map((product)=>{
      const {price, id} = product;
      return <ProductItem key={id} product={product}/>
    })
  }

  return(
  <div className={styles.Products}>
    <NavLink onClick={modalToggleHandler} to="#">Add new product</NavLink>
    <ul className={styles.Products__list}>
      {renderProducts()}
    </ul>
    {showAddProduct && <AddProduct onClose={modalToggleHandler} />}
  </div>
)};

export default Products;
