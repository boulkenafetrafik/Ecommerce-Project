




import React, { useState } from 'react';
import '../styles/comparater.css';
import products from '../products.json';

export default function Comparater() {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div>
      <button type="button" className="lab-btn" onClick={toggleProducts}>
        <span>Comparateur de prix</span>
      </button>

      {showProducts && (
        <div className="product-lists">
          {products.map(product => (
            <div key={product.id} className="product-items">
              <img src={product.img} alt={product.name} className="product-image" />
              <h5>{product.name}</h5>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
