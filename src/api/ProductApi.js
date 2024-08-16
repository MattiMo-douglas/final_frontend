const API_BASE_URL = 'http://your-backend-url.com/api';

// Create a new product
export const createProduct = async (product) => {
    const response = await fetch(`${API_BASE_URL}/newproduct`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error('Failed to create product');
    }

    return await response.json();
};

// Get all products
export const getProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/getproducts`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return await response.json();
};

// Get a product by ID
export const getProductById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/getproduct/${id}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch product with ID: ${id}`);
    }

    return await response.json();
};

// Update a product by ID
export const updateProductById = async (id, updatedProduct) => {
    const response = await fetch(`${API_BASE_URL}/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
        throw new Error(`Failed to update product with ID: ${id}`);
    }

    return await response.json();
};

// Delete a product by ID
export const deleteProductById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/product/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete product with ID: ${id}`);
    }

    return await response.json();
};

// Get a random product
export const getRandomProduct = async () => {
    const response = await fetch(`${API_BASE_URL}/getrandomproduct`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch a random product');
    }

    return await response.json();
};
