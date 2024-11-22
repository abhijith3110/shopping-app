/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ItemCard from "../ItemCard/ItemCard"
import "./TopPicks.css"

const TopPicks = () => {

    const [category, setCategory] = useState('all')

  return (

    <div className='top-picks-container'>
        <div className='top-picks'>
        <div className='top-picks-header'>
            <h1>Top Picks On Fashion</h1>
        </div>
        <div className='top-picks-cards'>
            <ItemCard selectedCategory= {category} showAll={true} />
        </div>
        </div>
    </div>

  )

}

export default TopPicks