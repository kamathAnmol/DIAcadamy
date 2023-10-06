import React, { useState } from 'react';

function ProductList({ products }) {
  const [cart, setCart] = useState([]);
  const handleAdd = (product) => {
    const tempcart = [...cart];
    let cartItem = tempcart.find((item) => item.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cartItem = product;
      cartItem.quantity = 1;
      tempcart.push(cartItem);
    }
    setCart(tempcart);
  };
  return (
    <div>
      <div id="ProductsList">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Product
              </th>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <h2>Rs. {product.price}</h2>
                  <button
                    style={{
                      border: 'none',
                      width: '100%',
                      padding: '0.6rem 0',
                      color: 'white',
                      backgroundColor: 'black',
                      borderRadius: '10px',
                    }}
                    onClick={() => handleAdd(product)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="Cart">
        <h1>Cart:</h1>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Product
              </th>
              <th style={{ border: '1px solid black', padding: '8px' }}>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <h2>Rs. {product.price}</h2>
                  <h4>Qunatity : {product.quantity}</h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
