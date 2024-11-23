import React, { createContext, useEffect, useState } from "react";

export const categoryContext = createContext();

export const CategoryProvider = ({ children }) => {

    const [category, setCategory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchCategory = async () => {

            try {

                const response = await fetch("http://localhost:4000/api/v1/category/all");

                if (!response.ok) {

                    throw new Error("Failed to fetch Category");
                }

                const data = await response.json();
                setCategory(data.data);

            } catch (error) {

                setError(error.message);
            }

        };

        fetchCategory();

    }, []);

    return (

        <categoryContext.Provider value={{ category, error }}>
            {children}
        </categoryContext.Provider>

    );
    
};

export default categoryContext;
