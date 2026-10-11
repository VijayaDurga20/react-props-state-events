
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Headphones',
      price: 1500,
      category: 'Accessories',
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 2500,
      category: 'Gadgets',
    },
  ]);

  const [cartCount, setCartCount] = useState(0);

  const handleAddProduct = (newProduct) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);
  };

  const handleAddToCart = (product) => {
    setCartCount((previousCount) => previousCount + 1);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-container">
      <header className="page-header">
        <h1>Product Store</h1>
        <p>Explore products and add your favourites.</p>

        <div className="cart-count">
          🛒 Cart Items: {cartCount}
        </div>
      </header>

      <ProductForm onAddProduct={handleAddProduct} />

      <h2 className="section-title">Available Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
