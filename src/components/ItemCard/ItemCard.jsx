import React, { useContext } from "react";
import { ProductContext } from "../../layout/Contexts/productContext";
import ReactStars from "react-rating-stars-component";
import userContext from "../../layout/Contexts/userContext";
import { useNavigate } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ selectedCategory, showAll }) => {
  const { product } = useContext(ProductContext);
  const { addToCart, error, addToWishlist, userData, deleteWishlistProduct, deleteCartItem } = useContext(userContext);
  const navigate = useNavigate()


  const handleAddToCart = (productId) => {
    addToCart({
      product: { _id: productId },
      quantity: 1,
    });
  };


  let filteredProducts = [];

  if (selectedCategory === "mens") {
    filteredProducts = product.filter(
      (product) => product.category.name === "mens"
    );
  } else if (selectedCategory === "womens") {
    filteredProducts = product.filter(
      (product) => product.category.name === "womens"
    );
  } else if (selectedCategory === "kids") {
    filteredProducts = product.filter(
      (product) => product.category.name === "kids"
    );
  } else if (selectedCategory === "allFilter") {
    const menProducts = product
      .filter((product) => product.category.name === "mens")
      .slice(1, 2);

    const womenProducts = product
      .filter((product) => product.category.name === "womens")
      .slice(0, 2);

    const kidsProducts = product
      .filter((product) => product.category.name === "kids")
      .slice(2, 3);

    filteredProducts = [...menProducts, ...womenProducts, ...kidsProducts];
  } else if (selectedCategory === "all") {
    filteredProducts = [...product];
  }

  const handleRedirectToLogin = () => {
    navigate('/login');
  };


  const itemToDisplay = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <div className="itemcards">
      {itemToDisplay.map((product) => (
        <div className="itemcard" key={product._id}>
          <div className="itemcard-img">
            <img
              src={`https://optimal-shoppings.onrender.com/uploads/${product.product_image}`}
              alt="Product"
            />
          </div>
          <div className="itemcard-details">
            <div className="itemcard-details-title">
              <p>{product.name}</p>
            </div>

            <div className="itemcard-details-price">${product.price}</div>
            <div className="item-card-price-cart">

              <div className="item-card-whishlist">
                {userData && userData.wishlist ? (
                  userData.wishlist.some((item) => item._id === product._id) ? (
                    <span
                      className="fa-solid fa-heart"
                      onClick={() => deleteWishlistProduct(product._id)}
                    ></span>
                  ) : (
                    <i
                      className="fa-regular fa-heart"
                      onClick={() => addToWishlist(product._id)}
                    ></i>
                  )
                ) : (
                  <i
                    className="fa-regular fa-heart"
                    onClick={() => navigate('/login')}
                  ></i>
                )}
              </div>


              <div className="itemcard-details-rate">
                <ReactStars
                  count={5}
                  value={product.rate || 0}
                  size={20}
                  edit={false}
                />
              </div>

              <div className="add-to-cart-btn">
                {userData && userData.cart && Array.isArray(userData.cart) ? (
                  userData.cart.some((item) => item.product._id === product._id) ? (
                    userData.cart.map((cart) => cart.product._id === product._id && (
                      <button onClick={() => deleteCartItem(cart._id)}><i className="fa-solid fa-cart-shopping" ></i></button>
                    ))
                  ) : (
                    <button onClick={() => handleAddToCart(product._id)}>
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                  )
                ) : (
                  <button onClick={handleRedirectToLogin}>
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                )}
              </div>


            </div>
          </div>
        </div>
      ))}
      {error && <p className="error-message"></p>}
    </div>
  );
};

export default ItemCard;
