const API_BASE_URL = 'https://final-backend-i2x3.onrender.com/api';


// Create a new book
export const createBook = async (book) => {
    const response = await fetch(`${API_BASE_URL}/v1/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    });

    if (!response.ok) {
        throw new Error('Failed to create book');
    }

    return await response.json();
};

// Get all books
export const getBooks = async () => {
    const response = await fetch(`${API_BASE_URL}/v1/book`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }

    return await response.json();
};

// Get a book by ID
export const getBookById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/v1/book/${id}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch book with ID: ${id}`);
    }

    return await response.json();
};


// Delete a book by ID
export const deleteBookById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/v1/book/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete book with ID: ${id}`);
    }

    return await response.json();
};

