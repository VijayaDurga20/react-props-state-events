
import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-icon">🛍️</div>

      <h3>{product.name}</h3>

      <p className="product-category">
        {product.category}
      </p>

      <p className="product-price">
        ₹{Number(product.price).toFixed(2)}
      </p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
