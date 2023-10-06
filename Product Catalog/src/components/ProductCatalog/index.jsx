import React, { useEffect, useState } from 'react';
import ProductList from '../ProductsList';

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState('all');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        selected === 'all'
          ? 'https://64f165820e1e60602d23bf22.mockapi.io/products'
          : `https://64f165820e1e60602d23bf22.mockapi.io/products?category=${selected}`,
      );
      setProducts(await response.json());
    };
    getProducts();
  }, [selected]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        'https://64f165820e1e60602d23bf22.mockapi.io/products',
      );
      const data = await response.json();
      const temp = [];
      data.map((product) => {
        if (temp.includes(product.category)) return;
        else temp.push(product.category);
      });
      setCategories(temp);
    };
    getCategories();
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          backgroundColor: 'grey',
        }}
      >
        <h1>Product Catalog</h1>
        <div>
          <button
            style={{
              border: 'none',
              padding: '0.6rem 0',
              backgroundColor: 'black',
              borderRadius: '10px',
              height: 'fit-content',
            }}
          >
            <a
              href="#ProductsList"
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '0.5rem',
              }}
            >
              Products
            </a>
          </button>
          <button
            style={{
              border: 'none',
              padding: '0.6rem 0',
              backgroundColor: 'black',
              borderRadius: '10px',
              height: 'fit-content',
              margin: '0 1rem',
              width: '5rem',
            }}
          >
            <a
              href="#Cart"
              style={{
                textDecoration: 'none',
                color: 'white',
                padding: '0.5rem',
              }}
            >
              Cart
            </a>
          </button>
        </div>
      </div>
      <div style={{ marginTop: '10rem' }}>
        <div>
          <select
            name="Category"
            id="category"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option value={category.toLowerCase()} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default ProductCatalog;
