import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../../layout/Contexts/userContext";
import "./Cart.css";

const Cart = () => {
  const { userData } = useContext(userContext);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (userData?.cart) {
      const initialQuantities = userData.cart.reduce((acc, item) => {
        acc[item._id] = item.quantity;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [userData]);

  const handleIncreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 1, 1),
    }));
  };

  const grandTotal = userData?.cart?.reduce((total, item) => {
    const itemTotal =
      item.product.price * (quantities[item._id] || item.quantity);
    return total + itemTotal;
  }, 0);

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
                  <td className="cart-product-price">$ {item.product.price}</td>
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
