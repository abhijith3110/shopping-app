import React, { useContext } from "react";
import { ProductContext } from "../../layout/Contexts/productContext";
import ReactStars from "react-rating-stars-component"
import "./ItemCard.css";

const ItemCard = ({ selectedCategory, showAll }) => {

  const { product } = useContext(ProductContext);


  let filteredProducts = [];

  if (selectedCategory === "men") {

    filteredProducts = product.filter(

      (product) => product.category.name === "mens"

    );

  } else if (selectedCategory === "women") {

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
      .slice(2, 3);

    const womenProducts = product
      .filter((product) => product.category.name === "womens")
      .slice(2, 3)

    const kidsProducts = product
      .filter((product) => product.category.name === "kids")
      .slice(2, 4);

    filteredProducts = [...menProducts, ...womenProducts, ...kidsProducts];
    
  } else if (selectedCategory === "all") {

    const products = product.map((product) => product)

    filteredProducts = [...products]
    
  }


  const itemToDisplay = showAll? filteredProducts: filteredProducts.slice(0, 4);

  return (
    <div className="itemcards">
      {itemToDisplay.map((product) => (
        <div className="itemcard" key={product._id}>
          <div className="itemcard-img">
            <img src={`http://localhost:4000/uploads/${product.product_image}`} alt="img" />
          </div>
          <div className="itemcard-details">
            <div className="itemcard-details-title">
              <p>{product.name}</p>
            </div>
            <div className="itemcard-details-price">${product.price}</div>
            <div className="itemcard-details-rate">
              <ReactStars
                count={5}
                value={product.rate || 0}
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
