import React, { useContext } from 'react';
import categoryContext from '../../layout/Contexts/categoryContext';
import "./Category.css";

const Category = () => {

    const { category } = useContext(categoryContext);

    return (
        <div className="category">
            <div className="category-container">
                <div className="category-header">
                    <div className="category-heading">
                        <h2>Discover the Best Value Deals</h2>
                    </div>
                    <div className="category-sub-heading">
                        <p>
                            Your One-stop Online Shopping Site For Clothes,
                            Accessories, Footwear & More
                        </p>
                    </div>
                </div>
                <div className="category-lists">
                    {category && Array.isArray(category) ? (
                        category.map((item) => (
                            <div className="category-list" key={item._id}>
                                <div className="category-list-img">
                                    <img src={`http://localhost:4000/uploads/${item.category_image}`} alt={item.name} />
                                </div>
                                <div className="category-list-category">
                                    <p>{item.name.toUpperCase()}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No categories available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Category;
