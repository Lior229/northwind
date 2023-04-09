import {Navigate, Route, Routes} from 'react-router-dom'
import React, { FC } from 'react';
import styles from './Router.module.scss';
import Home from '../HomeArea/Home/Home';
import About from '../AboutArea/About/About';
import PageNotFound from '../LayoutArea/PageNotFound/PageNotFound';
import ProductsArea from '../ProductsArea/ProductsArea';
import AddProduct from '../ProductsArea/AddProduct/AddProduct';
import ProductDetails from '../ProductsArea/ProductDetails/ProductDetails';

interface RouterProps {}

const Router: FC<RouterProps> = () => (
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/products" element={<ProductsArea/>}/>
    <Route path="/products/new" element={<AddProduct/>}/>
    <Route path="/products/:prodId" element={<ProductDetails/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/" element={<Navigate to="/home"/>}/>
    <Route path="*" element={<PageNotFound/>}/>

  </Routes>
);

export default Router;
