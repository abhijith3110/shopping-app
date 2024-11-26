import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../../layout/Contexts/userContext";
import "./Cart.css";

const Cart = () => {
  const { userData } = useContext(userContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (userData?.cart) {
      const initialQuantities = {};
      for (const item of userData.cart) {
        initialQuantities[item._id] = item.quantity;
      }
      setQuantities(initialQuantities);
    }
  }, [userData]);

  const handleIncreaseQuantity = (id) => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
      return updatedQuantities;
    });
  };

  const handleDecreaseQuantity = (id) => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      updatedQuantities[id] = Math.max((updatedQuantities[id] || 0) - 1, 1);
      return updatedQuantities;
    });
  }

  let grandTotal = 0;

  if (userData?.cart) {
    for (const item of userData.cart) {
      const itemTotal = item.product.price * (quantities[item._id] || item.quantity);
      grandTotal += itemTotal;
    }
  }


  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-header">
          <h1>
            {userData?.first_name} {userData?.last_name}'s Shopping Cart
          </h1>
        </div>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              Array.isArray(userData.cart) &&
              userData.cart.length > 0 ? (
              userData.cart.map((item) => (
                <tr key={item._id}>
                  <td className="cart-product-image-name">
                    <img
                      src={`http://localhost:4000/uploads/${item.product.product_image}`}
                      alt={item.product.name}
                      className="cart-item-image"
                    />
                    <div className="cart-product-name">
                      <p>{item.product.name}</p>
                    </div>
                  </td>
                  <td className="cart-product-price">$ {item.product.price || 0}</td>
                  <td className="quantity-count">
                    <div className="quantity-buttons">
                      <button onClick={() => handleDecreaseQuantity(item._id)}>
                        -
                      </button>
                      <p>{quantities[item._id] || item.quantity}</p>
                      <button onClick={() => handleIncreaseQuantity(item._id)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    ${" "}
                    {item.product.price *
                      (quantities[item._id] || item.quantity)}
                  </td>
                  <td>
                    {" "}
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Your cart is empty.</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="checkout-container">
          <div className="checkout-total">
            <p>Grand Total: $ {grandTotal}</p>
          </div>
          <div className="checkout-btn">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
