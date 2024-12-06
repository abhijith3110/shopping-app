import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../../layout/Contexts/userContext";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { loadStripe } from "@stripe/stripe-js";
import "./Cart.css";

const Cart = () => {
  
  const { userData, fetchUser, deleteCartItem } = useContext(userContext);
  const [quantities, setQuantities] = useState({});
  const [, setError] = useState(null)

  useEffect(() => {
    if (userData?.cart) {
      const initialQuantities = {};
      for (const item of userData.cart) {
        initialQuantities[item._id] = item.quantity;
      }
      setQuantities(initialQuantities);
    }
  }, [userData]);


  const cartItemCountUpdate = async (updatedQuantities) => {
    try {
      setError(null);
  
      const token = Cookies.get("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const updatedCart = userData.cart.map((item) => {
      const newQuantity = updatedQuantities[item._id] || item.quantity; 

        return {
          _id: item._id,
          product: item.product._id,  
          quantity: newQuantity,
        };
      });
  

      const response = await fetch(`https://optimal-shoppings.onrender.com/api/v1/user/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart: updatedCart }), 
      });
  
      if (!response.ok) {
        throw new Error("Error updating product quantities in the cart.");
      }
  
      await fetchUser();
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
  };
  
  const handleIncreaseQuantity = async (id) => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
      cartItemCountUpdate(updatedQuantities); 
      return updatedQuantities;
    });
  };
  
  const handleDecreaseQuantity = async (id) => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      updatedQuantities[id] = Math.max((updatedQuantities[id] || 0) - 1, 1);
      cartItemCountUpdate(updatedQuantities);
      return updatedQuantities;
    });
  };
  

  let grandTotal = 0;

  if (userData?.cart) {
    for (const item of userData.cart) {
      const itemTotal = item.product.price * (quantities[item._id] || item.quantity);
      grandTotal += itemTotal;
    }
  }


  const handlePayment = async () => {

    try {

        const token = Cookies.get("token");

        const response = await fetch("https://optimal-shoppings.onrender.com/api/v1/user/create-checkout-session", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart: userData.cart }),
        });

        if (!response.ok) {
            throw new Error("Failed to create checkout session");
        }

        const { sessionId } = await response.json();

        const stripe = await loadStripe('pk_test_51OTIAJSIBQHp4SrpnAMD9ufpg5DJiGLdmzMcNOiCo2KByrnqO7jKDvUJ8Ddvihj6s5nace7mYrm1jjNArTy1yViY00LErcEJBa');

        const { error } = await stripe.redirectToCheckout({

            sessionId: sessionId,
        });

        if (error) {
            throw new Error(error.message);
        }

    } catch (error) {

        alert("An error occurred while processing the payment. Please try again.");
    }
};


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
                      src={`https://optimal-shoppings.onrender.com/${item.product.product_image}`}
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
                    <i class="fa-solid fa-trash" onClick={()=>deleteCartItem(item._id)}></i>
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
             <button onClick={handlePayment}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
