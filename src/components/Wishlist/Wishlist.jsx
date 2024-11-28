import React, { useContext } from "react";
import { userContext } from "../../layout/Contexts/userContext";
import "./Wishlist.css";

const Wishlist = () => {
    const { userData } = useContext(userContext);

    return (

        <div className="wishlist">
            <div className="wishlist-container">

                <h1>Your Wishlist</h1>

                {userData?.wishlist?.length > 0 ? (
                    <div className="wishlist-items">
                        {userData.wishlist.map((product) => (
                            <div className="wishlist-item" key={product._id}>
                                <img
                                    src={`http://localhost:4000/uploads/${product.product_image}`}
                                    alt={product.name}
                                    className="wishlist-item-image"
                                />
                                <div className="wishlist-item-details">
                                    <h2>{product.name}</h2>
                                    <p>Price: ${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your wishlist is empty!</p>
                )}
            </div>

        </div>
    )
};

export default Wishlist;
