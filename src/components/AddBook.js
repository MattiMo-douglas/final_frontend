import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    createBook,
    deleteBookById,
} from '../api/BookApi';

const AddBook = () => {
    const [newBookTitle, setNewBookTitle] = useState('');
    const [newBookAuthor, setNewBookAuthor] = useState('');
    const [newBookDescription, setNewBookDescription] = useState('');

    const handleCreateBook = async (e) => {
        e.preventDefault()
        if (newBookTitle && newBookAuthor && newBookDescription) {
            try {
                await createBook({ 
                    bookTitle: newBookTitle, 
                    bookAuthor: newBookAuthor, 
                    description: newBookDescription 
                });
                resetForm();
            } catch (error) {
                console.error(`Error Creating book:`, error);
            }
        } else {
            console.error('Invalid input. Please make sure all fields are filled out correctly.');
        }
    };


    const resetForm = () => {
        setNewBookTitle('');
        setNewBookAuthor('');
        setNewBookDescription('');
    };


    return (
         (
            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Book</h1>
                            <p className="lead text-center">Create new book</p>
                            <form noValidate="" onSubmit={handleCreateBook}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={newBookTitle}
                                        onChange={(e) => setNewBookTitle(e.target.value)}
                                        placeholder="Title of the Book"
                                        name="title"
                                        className="form-control"
                                        spellCheck="false"
                                        data-ms-editor="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                    type="text"
                                    placeholder="Author"
                                    name="author"
                                    className="form-control"
                                    value={newBookAuthor}
                                    onChange={(e) => setNewBookAuthor(e.target.value)}
                                    spellCheck="false"
                                    data-ms-editor="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                    type="text"
                                    placeholder="Describe this book"
                                    name="description"
                                    className="form-control"
                                    value={newBookDescription}
                                    onChange={(e) => setNewBookDescription(e.target.value)}
                                    spellCheck="false"
                                    data-ms-editor="true"
                                    />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4"   onClick={handleCreateBook} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          )
    );
};

export default AddBook;