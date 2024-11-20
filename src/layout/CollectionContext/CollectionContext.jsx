import React, { createContext, useEffect, useState } from "react";

export const itemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [item, setItem] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch Items");
                }
                const data = await response.json();
                setItem(data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchItems();
    }, []);

    return (
        <itemContext.Provider value={{ item, error }}>
            {children}
        </itemContext.Provider>
    );
};
