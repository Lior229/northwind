import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Product from '../../../models/Product';
import { updateProduct } from '../../../utils/fetchProducts';
import Button from '../../Button/Button';
import FormGroupWithError from '../../FormGroupWithError/FormGroupWithError';
import Modal from '../../Modal/Modal';
import styles from './EditProduct.module.scss';
import validation from './validation';

interface EditProductProps {
  onClose: () => void;
  onEditProduct: (product:Product) =>void;
  product: Product;
}

const EditProduct: FC<EditProductProps> = ({onClose, product, onEditProduct}) => {

  const {register, handleSubmit, formState, setValue} = useForm<Product>();

  const sumbitProductHandler = (product:Product) =>{
      updateProduct(product).then(response =>{
        //set product
        onEditProduct(response);
        onClose();
      }).catch((err)=>{
        console.log(err);
      })
  }

  useEffect(() => {
    setValue("id",product.id);
    setValue("name",product.name);
    setValue("price",product.price);
    setValue("stock",product.stock);

  }, [])
  

  return(
    <Modal onClose={onClose}>
            <div className={`Box ${styles.EditProduct}`}>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit(sumbitProductHandler)}>

              <input type="hidden" {...register('id')} />

              <FormGroupWithError error={formState.errors.name?.message}>
                <label>Name:</label>
                <input type="text" {...register('name', validation.name)} />
              </FormGroupWithError>

              <FormGroupWithError error={formState.errors.price?.message}>
                <label>Price:</label>
                <input type="number" {...register('price', validation.price)} />
              </FormGroupWithError>

              <FormGroupWithError error={formState.errors.stock?.message}>
              <label>Stock:</label>
              <input type="number" {...register('stock', validation.stock)}/>
              </FormGroupWithError>

              <FormGroupWithError>
              <label>image:</label>
              <input type="file" accept='image/*' {...register('image')}/>
              </FormGroupWithError>

              <Button>
                Edit
              </Button>

            </form> 
          </div>
    </Modal>
)};

export default EditProduct;
