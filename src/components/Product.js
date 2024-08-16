import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, getProductById, updateProductById, deleteProductById, getRandomProduct } from '../api/ProductApi'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts).catch(console.error);
    }, []);

    return (
        <div className='custom-button'>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
