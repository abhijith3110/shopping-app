import React, { useContext } from 'react'
import "./Allcategories.css"
import categoryContext from '../../layout/Contexts/categoryContext'
import SubBanner from "../SubBanner/SubBanner"
import { useNavigate } from 'react-router-dom';

const Allcategories = () => {

  const { category } = useContext(categoryContext)
  const navigate = useNavigate()

  const handleCategoryNavigation = (category) => {

    navigate(`/products?category=${category}#collection-category`);
}

  return (

    <>
      <div className='all-category-banner'></div>
      <div className='all-category-container'>
        <div className='all-category'>
          <div className='all-category-header'>
            <div className="all-category-heading"><h1>All Categories</h1></div>
            <div className="all-category-sub-heading"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem atque amet praesentium quaerat, dolore velit rem neque voluptates incidunt temporibus</p></div>
          </div>
          <div className="category-lists">
            {category && Array.isArray(category) ? (
              category.map((item) => (
                <div className="category-list" key={item._id} onClick={() => handleCategoryNavigation(`${item.name}`)}>
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
      <SubBanner />
    </>

  )

}

export default Allcategories