import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './components/Book';  
import AddBook from './components/AddBook';  

const App = () => (
  <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/create-book" element={<AddBook />} />
      </Routes>
    </div>
  </Router>
);

export default App;