import React, { FC, useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import Product from '../../../models/Product';
import { deleteProduct, getProduct } from '../../../utils/fetchProducts';
import Loader from '../../Loader/Loader';
import EditProduct from '../EditProduct/EditProduct';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);

  const modalToggleHandler = () =>{
      setShowEditProduct((prevState)=> !prevState);
  }

  const editProductHandler = (product: Product) =>{
    setProduct((prevProduct) => {
      const updateProduct = {...prevProduct,...product}
      return updateProduct;
    })
  }
  
  const deleteProductHandler = async () => {
    if (params.prodId) {
      setLoading(true);
      try{
        const success = await deleteProduct(+params.prodId);
        if (success)
        {
          alert('the product deleted');
          navigate('/products')
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  
  useEffect(() => {

    if (params.prodId) {
      setLoading(true);
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
              <NavLink to="/products">Back</NavLink>
              <span> | </span>
              <NavLink onClick={modalToggleHandler} to="#">Edit</NavLink>
              <span> | </span>
              <NavLink onClick={deleteProductHandler} to="#">Delete</NavLink>
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
    {(showEditProduct && product) && <EditProduct onEditProduct={editProductHandler} onClose={modalToggleHandler} product={product} />}
  </div>
)};

export default ProductDetails;
