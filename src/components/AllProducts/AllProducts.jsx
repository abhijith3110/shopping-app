import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard"
import "./AllProducts.css"

const AllProducts = () => {

  const location = useLocation();
  const [category, setCategory] = useState('all')

  useEffect(() => {

    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get("category");

    if (categoryParam) {
      setCategory(categoryParam);
    }

    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

  }, [location.search, location.hash])

  const handleCategory = (category) => {
    setCategory(category)
  }

  return (

    <>
      <div className='all-product' id='all-product'></div>
      <div className='all-product-container' id="collection-category">
        <div className='all-product-banner'>
          <div className='all-product-heading'><h1>All Products</h1></div>
          <div className='all-product-sub-heading'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ducimus
            laborum doloremque sunt. Qui placeat hic laboriosam illum ducimus voluptates.</p></div>
        </div>
        <div className='collection-category'>
          <ul>
            <li onClick={() => handleCategory("all")}>ALL</li>
            <li onClick={() => handleCategory("women")}>WOMEN</li>
            <li onClick={() => handleCategory("men")}>MEN</li>
            <li onClick={() => handleCategory("kids")}>KIDS</li>
          </ul>
        </div>
        <div><ItemCard selectedCategory={category} showAll={true} /></div>
      </div>
    </>


  )

}

export default AllProducts