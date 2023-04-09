import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import Product from '../../../models/Product';
import { getProduct } from '../../../utils/fetchProducts';
import Loader from '../../Loader/Loader';
import ProductItem from '../Products/ProductItem/ProductItem';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {
    setLoading(true);

    if (params.prodId) {
      getProduct(+params.prodId).then((product)=>{
        setProduct(product);
      }).catch((err)=>{
        console.log(err);
      }).finally(()=>{
        setLoading(false);
      })
    }

  }, [])

  const renderProduct = () =>{
    if (product) {
      const imgsrc= `${BASE_API_URL}products/images/${product.imageName}`
      
      return(
        <div className={styles.ProductDetails__product}>
          <div className={styles.ProductDetails__imgContainer}>
              <img src={imgsrc} alt={product.name} />
          </div>
          <div className={styles.ProductDetails__content}>
              <h3>Name: {product.name}</h3>
              <h3>Price: {product.price}</h3>
              <h3>Stock: {product.stock}</h3>
          </div>
        </div>
      )}
  }
  
  if (loading) {
    return <Loader/>
  }

  return(
  <div className={styles.ProductDetails}>
    <header className={styles.ProductDetails__header}>
      <h2>Product Details</h2>
    </header>
    <div className={styles.ProductDetails__body}>
      {renderProduct()}
    </div>
  </div>
)};

export default ProductDetails;
