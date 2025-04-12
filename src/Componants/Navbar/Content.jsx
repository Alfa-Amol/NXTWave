import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css';
import './MediaQueries.css';
import 'bootstrap';
import FilterSidebar from './FilterSidebar';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" />;
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" />


const Content = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('recommended');  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const sortedProducts = () => {
    switch (sortOption) {
      case 'priceLowToHigh':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return [...products].sort((a, b) => b.price - a.price);
      case 'newestFirst':
        return [...products]; // Assuming fake store doesn't provide timestamps
      default:
        return products;
    }
  };

  return (
    <div className="product-page">
      <header className="header">
        <h1 className="">Discover Our Products</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur. Amet eu potenti rhoncus scelerisque.</p>
      </header>

      <div className="sort-container">
        <select 
          className="sort-dropdown" 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="recommended">Recommended</option>
          <option value="newestFirst">Newest First</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
       <div className='grid-container'>
        <FilterSidebar></FilterSidebar>
      <div className="product-grid">
        {sortedProducts().map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Content;
