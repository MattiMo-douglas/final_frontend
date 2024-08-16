import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    deleteBookById,
    getBooks,
} from '../api/BookApi';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            await deleteBookById(id);
            window.location.reload()
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const BookCard = ({book, id}) => (
        <div className="card-container" key={id}>
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div className="desc">
            <h2><a href=''> {book.bookTitle}</a></h2>
            <h3>{book.bookAuthor}</h3>
            <p>{book.description}</p>
            <button className='delete-btn' onClick={() => handleDeleteBook(id)}>X</button>
          </div>
        </div>
    )

    const bookList =
    books.length === 0
      ? 'there is no book record!'
      : books.map(book => <BookCard book={book} id={book._id} />);

    return (
         (
            <div className='BookList'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <br />
                    <h2 className='display-4 text-center'>Books List</h2>
                  </div>
        
                  <div className='col-md-11'>
                    <Link
                      to='/create-book'
                      className='btn btn-info float-right'
                    >
                      + Add New Book
                    </Link>
                    <br />
                    <br />
                    <hr />
                  </div>
                </div>
        
                <div className='list'>{bookList}</div>
              </div>
            </div>
          )
    );
};

export default BookList;