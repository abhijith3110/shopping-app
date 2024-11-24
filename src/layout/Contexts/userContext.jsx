import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchUser = async () => {
      try {

        const token = Cookies.get("token");

        console.log(token);
        
        if (!token) {
          throw new Error("No authentication token found.");
        }

        const userCookie = Cookies.get("user");
        console.log(userCookie);
        
        if (!userCookie) {
          throw new Error("No user information found in cookies.");
        }

        const response = await fetch(`http://localhost:4000/api/v1/user/${userCookie}`, {
          method: "GET", 
          headers: {
            "Authorization": `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }

        const data = await response.json();
        setUserData(data.data); 

      } catch (error) {
        setError(error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ userData, error }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
