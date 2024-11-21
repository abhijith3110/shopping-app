import React, { useContext } from "react";
import { itemContext } from "../../layout/CollectionContext/CollectionContext";
import ReactStars from "react-rating-stars-component";
import "./ItemCard.css";

const ItemCard = ({ selectedCategory, showAll }) => {
  const { item, error } = useContext(itemContext);

  let filteredProducts = [];
  if (selectedCategory === "all") {
    filteredProducts = item.filter(
      (product) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );
  } else if (selectedCategory === "men") {
    filteredProducts = item.filter(
      (product) => product.category === "men's clothing"
    );
  } else if (selectedCategory === "women") {
    filteredProducts = item.filter(
      (product) => product.category === "women's clothing"
    );
  } else if (selectedCategory === "type") {
    const menProducts = item
      .filter((product) => product.category === "men's clothing")
      .slice(1, 3);
    const womenProducts = item
      .filter((product) => product.category === "women's clothing")
      .slice(2, 4);
    filteredProducts = [...menProducts, ...womenProducts];
  }

  const itemToDisplay = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  if (error) return <p> Product Not Found</p>;

  return (
    <div className="itemcards">
      {itemToDisplay.map((product) => (
        <div className="itemcard" key={product.id}>
          <div className="itemcard-img">
            <img src={product.image} alt="img" />
          </div>
          <div className="itemcard-details">
            <div className="itemcard-details-title">
              <p>{product.title}</p>
            </div>
            <div className="itemcard-details-price">${product.price}</div>
            <div className="itemcard-details-rate">
              <ReactStars
                count={5}
                value={product.rating?.rate}
                size={20}
                edit={false}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
