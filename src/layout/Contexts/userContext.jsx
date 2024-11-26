import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async () => {

    try {
      const token = Cookies.get("token");

      if (!token) {

        setUserData(null);
        return;
      }
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      const response = await fetch(`http://localhost:4000/api/v1/user/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }

      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      setError(error.message);
      setUserData(null);
    }
  };


  const addToCart = async (cartItem) => {
    setError(null);

    const token = Cookies.get("token");

    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/user/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cart: [cartItem],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error uploading products to the cart");
      }

      await fetchUser();
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ userData, error, fetchUser, setUserData, addToCart }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
