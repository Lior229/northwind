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
