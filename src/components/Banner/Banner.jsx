import React from 'react'
import "./Banner.css"
import ViewCollection from '../ViewCollection/ViewCollection'

const Banner = () => {

  return (

    <div className='banner'>
        <div className='banner-content'>
            <h1>Ensuring Customer Success</h1>
            <p>Intelligent and beautiful shopify themes</p>
            <ViewCollection />
        </div>
    </div>

  )

}

export default Banner