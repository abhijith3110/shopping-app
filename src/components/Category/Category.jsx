import React, { useContext } from 'react'
import "./Category.css"
import { itemContext } from '../../layout/CollectionContext/CollectionContext';

const Category = () => {

    const { item, error } = useContext(itemContext);

    const filterJewellery = item.filter((item) => item.category === "jewelery")

    return (

        <div className='category'>
            <div className='category-container'>
                <div className='category-header'>
                    <div className='category-heading'>
                        <h2>Discover the Best Value Deals</h2>
                    </div>
                    <div className='category-sub-heading'>
                        <p>Your One-stop Online Shopping Site For Clothes,
                            Accessories Footwear & More</p>
                    </div>
                </div>
                <div className='category-lists'>
                {filterJewellery.map(item => (
                    <div className='category-list' key={item.id}>
                        <div className='category-list-img'>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <p>{item.category}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    )

}

export default Category