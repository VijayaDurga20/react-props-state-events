
import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price || !category.trim()) {
      alert('Please fill all fields!');
      return;
    }

    if (Number(price) <= 0) {
      alert('Price must be greater than zero!');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      category: category.trim(),
    };

    onAddProduct(newProduct);

    setName('');
    setPrice('');
    setCategory('');
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0.01"
        step="0.01"
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
