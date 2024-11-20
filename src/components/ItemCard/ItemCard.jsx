import React, { useContext } from "react";
import { itemContext } from "../../layout/CollectionContext/CollectionContext";
import ReactStars from "react-rating-stars-component"
import "./ItemCard.css"

const ItemCard = ({ selectedCategory, showAll }) => {
  const { item, error } = useContext(itemContext);

  const filterProduct = item.filter((product) => {
    if (selectedCategory === "all") return product.category === "men's clothing" || product.category === "women's clothing";
    if (selectedCategory === "men") return product.category === "men's clothing";
    if (selectedCategory === "women") return product.category === "women's clothing";
    return false
  });

  const itemToDisplay = showAll ? filterProduct : filterProduct.slice(0, 8)

  if (error) return <p> Product Not Found {error}</p>;

  return (
    <div className="itemcards">
      {itemToDisplay.map((product) => (
        <div className="itemcard" key={product.id}>
          <div className="itemcard-img">
            <img src={product.image} alt="img" />
          </div>
          <div className="itemcard-details">
            <div className="itemcard-details-title"><p>{product.title}</p></div>
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
