import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Product from '../../../models/Product';
import { addProduct } from '../../../utils/fetchProducts';
import Button from '../../Button/Button';
import FormGroupWithError from '../../FormGroupWithError/FormGroupWithError';
import Modal from '../../Modal/Modal';
import styles from './AddProduct.module.scss';
import validation from './validation';

interface AddProductProps {
  onClose: () => void;
  onAddProduct: (product:Product) =>void;
}

const AddProduct: FC<AddProductProps> = ({onClose, onAddProduct}) => {

  const {register, handleSubmit, formState} = useForm<Product>();

  const sumbitProductHandler = (product:Product) =>{
    addProduct(product).then((_product)=>{
        onAddProduct(_product);
        onClose();
    }).catch(
      (err)=>{console.log(err);
    })
  }

  return(
    <Modal onClose={onClose}>
            <div className={styles.AddProduct}>
            <h2>AddProduct</h2>
            <form onSubmit={handleSubmit(sumbitProductHandler)}>

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
                Add
              </Button>

            </form> 
          </div>
    </Modal>
)};

export default AddProduct;
