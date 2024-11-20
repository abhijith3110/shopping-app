/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Header.css"


const Header = () => {

    return (
        <header>
            <div className='header'>
                <div className='header-logo'>
                    <img src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937" alt="header-logo" />
                </div>
                <nav className='header-nav'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Buy Now</a></li>
                    </ul>
                </nav>
                <div className='header-icons'>
                    <div className='header-icon'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='header-icon'>
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div className='header-icon'>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className='header-icon'>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header