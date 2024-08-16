import React, { useEffect, useState } from 'react';
import {
    getProducts,
    createProduct,
    updateProductById,
    deleteProductById,
} from '../api/ProductApi';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [formProductId, setFormProductId] = useState(null);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleCreateOrUpdateProduct = async () => {
        const price = Number(newProductPrice);
        if (newProductName && price && newProductDescription) {
            try {
                if (formProductId) {
                    await updateProductById(formProductId, { 
                        name: newProductName, 
                        price, 
                        description: newProductDescription 
                    });
                } else {
                    await createProduct({ 
                        name: newProductName, 
                        price, 
                        description: newProductDescription 
                    });
                }
                fetchProducts();
                resetForm();
            } catch (error) {
                console.error(`Error ${formProductId ? 'updating' : 'creating'} product:`, error);
            }
        } else {
            console.error('Invalid input. Please make sure all fields are filled out correctly.');
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await deleteProductById(id);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEditProduct = (product) => {
        setFormProductId(product._id);
        setNewProductName(product.name);
        setNewProductPrice(product.price.toString());
        setNewProductDescription(product.description);
    };

    const resetForm = () => {
        setFormProductId(null);
        setNewProductName('');
        setNewProductPrice('');
        setNewProductDescription('');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto font-sans">
            <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
            <ul className="divide-y divide-gray-200">
                {products.map(product => (
                    <li key={product._id} className="flex flex-col p-4 border border-gray-300 rounded-lg shadow-sm mb-4">
                        <div className="text-lg font-medium">{product.name} - ${product.price}</div>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => handleEditProduct(product)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteProduct(product._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">{formProductId ? 'Edit Product' : 'Add New Product'}</h2>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                        placeholder="Product Name"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        value={newProductPrice}
                        onChange={(e) => setNewProductPrice(e.target.value)}
                        placeholder="Product Price"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        value={newProductDescription}
                        onChange={(e) => setNewProductDescription(e.target.value)}
                        placeholder="Product Description"
                        rows="4"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex space-x-4">
                        <button
                            onClick={handleCreateOrUpdateProduct}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                        >
                            {formProductId ? 'Update Product' : 'Create Product'}
                        </button>
                        {formProductId && (
                            <button
                                onClick={resetForm}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;