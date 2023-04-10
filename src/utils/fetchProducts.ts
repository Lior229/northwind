import axios from "axios";
import Product from "../models/Product";
import { BASE_API_URL } from "../config";

export const getProducts = async ():Promise<Product[]> =>{
    //ajax request
    const response = await axios.get<Product[]>(`${BASE_API_URL}products`);
    // extract products
    const products = response.data;

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
}

export const getProduct = async (id:number):Promise<Product> =>{

    const response = await axios.get(`${BASE_API_URL}products/${id}`);
    const product = response.data;

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(product)
        }, 1500);
    });
}

export const addProduct = async (product:Product):Promise<Product> =>{

    //const response = await axios.post(`${BASE_API_URL}products/`, product); //sending object eith binary (without files)
    
    const formData = new FormData(); // can contain string and / or files
    formData.append('name',product.name);
    formData.append('price',product.price.toString());
    formData.append('stock',product.stock.toString());
    if(product.image) {
    formData.append('image',product.image[0]); // image = FileList image[0] = file / blob
    }
    const response = await axios.post(`${BASE_API_URL}products/`, formData);
    const addedProduct = response.data;

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(addedProduct)
        }, 1000);
    });
}