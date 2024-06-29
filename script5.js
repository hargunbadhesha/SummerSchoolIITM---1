import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, description };
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
import React from 'react';

const ProductList = ({ products, onBuyProduct }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => onBuyProduct(product)}>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';

const SellingPage = ({ onAddProduct }) => {
  return (
    <div>
      <h2>Sell Products</h2>
      <ProductForm onAddProduct={onAddProduct} />
    </div>
  );
};

export default SellingPage;
import React from 'react';
import ProductList from '../components/ProductList';

const BuyingPage = ({ products, onBuyProduct }) => {
  return (
    <div>
      <h2>Buy Products</h2>
      <ProductList products={products} onBuyProduct={onBuyProduct} />
    </div>
  );
};

export default BuyingPage;
import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
};

export default CartPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BuyingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleBuyProduct = (product) => {
    // Implement buy product logic
    console.log('Buying product:', product);
  };

  return (
    <div>
      <h2>Buy Products</h2>
      <ProductList products={products} onBuyProduct={handleBuyProduct} />
    </div>
  );
};

export default BuyingPage;
