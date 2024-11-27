import React, { useContext } from "react";
import { ProductContext } from "../../layout/Contexts/productContext";
import ReactStars from "react-rating-stars-component";
import userContext from "../../layout/Contexts/userContext";
import "./ItemCard.css";

const ItemCard = ({ selectedCategory, showAll }) => {
  const { product } = useContext(ProductContext);
  const { addToCart, error, addToWishlist, userData, deleteWishlistProduct } = useContext(userContext);

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

  const itemToDisplay = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <div className="itemcards">
      {itemToDisplay.map((product) => (
        <div className="itemcard" key={product._id}>
          <div className="itemcard-img">
            <img
              src={`http://localhost:4000/uploads/${product.product_image}`}
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
                  userData.wishlist.includes(product._id) ? (
                    <span
                      className="fa-solid fa-heart"
                      onClick={()=>deleteWishlistProduct(product._id)}
                    ></span>
                  ) : (
                    <i
                      className="fa-regular fa-heart"
                      onClick={() => addToWishlist(product._id)}
                    ></i>
                  )
                ) : null}
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
                <button
                  onClick={() =>
                    addToCart({
                      product: {
                        _id: product._id,
                      },
                      quantity: 1,
                    })
                  }
                >
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
};

export default ItemCard;
