import React, { useContext } from "react";
import { userContext } from "../../layout/Contexts/userContext";
import "./Wishlist.css";

const Wishlist = () => {
    const { userData, deleteWishlistProduct } = useContext(userContext);

    return (

        <div className="wishlist">
            <div className="wishlist-container">

                <h1>Your Wishlist</h1>

                {userData?.wishlist?.length > 0 ? (
                    <div className="wishlist-items">
                        {userData.wishlist.map((product) => (
                            <div className="wishlist-item" key={product._id}>
                                <div className="wishlist-item-img">
                                <img
                                    src={`http://localhost:4000/uploads/${product.product_image}`}
                                    alt={product.name}
                                />
                                </div>
                                <div className="wishlist-item-details">
                                    <div>
                                    <h2>{product.name}</h2>
                                    </div>
                                    <div className="wishlist-item-btn">
                                    <p>Price: ${product.price}</p>
                                    <i class="fa-solid fa-trash" onClick={()=> deleteWishlistProduct(product._id)}></i>
                                    </div>
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
