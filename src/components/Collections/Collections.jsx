import React, { useState } from 'react'
import "./Collections.css"
import ItemCard from '../ItemCard/ItemCard'
import ViewCollection from '../ViewCollection/ViewCollection'

const Collections = () => {

    const [category, setCategory] = useState('allFilter')
    const [showAll, setShowAll] = useState(false)

    const handleCategory = (category) => {
        setCategory(category)
        setShowAll(false);
    }

    const handleViewCollection = () => {
        setShowAll((prev) => !prev);
    };

    return (

        <div className='collection-container'>
            <div className='collection'>
                <div className='collection-header'>
                <div className='collection-heading'>
                    <p>Best Seller</p>
                </div>
                <div className='collection-subHeading'>
                    <p>Browse the huge variety of our best seller</p>
                </div>
                <div className='collection-category'>
                    <ul>
                        <li onClick={() => handleCategory("allFilter")}>ALL</li>
                        <li onClick={() => handleCategory("womens")}>WOMEN</li>
                        <li onClick={() => handleCategory("mens")}>MEN</li>
                        <li onClick={() => handleCategory("kids")}>KIDS</li>
                    </ul>
                </div>
                </div>
            <div className='collection-category'>
            <ItemCard selectedCategory={category} showAll={showAll} />
            </div>

            <div className='collection-view-btn'>
            <ViewCollection onClick={handleViewCollection} showAll={showAll} />
            </div>
            </div>
        </div>

    )
}

export default Collections