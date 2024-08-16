import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/Product';  
// import NotFound from './components/NotFound';  

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  </Router>
);

export default App;