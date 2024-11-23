import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/v1/product/all");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProduct(data.data);
                console.log(data.data);
                
                
            } catch (error) {
                setError(error.message);
            }
        };

        fetchItems();
    }, []);

    return (
        <ProductContext.Provider value={{ product, error }}>
            {children}
        </ProductContext.Provider>
    );
};
