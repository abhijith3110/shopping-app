/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import "./Header.css"


const Header = () => {

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isFixed ? 'fixed' : ''}>
            <div className='header'>
                <div className='header-logo'>
                    <img src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937" alt="header-logo" />
                </div>
                <nav className='header-nav'>
                    <ul>
                        <li><a href="#">Home</a>
                        <div className='header-sub-nav'>
                        <ul>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Girls</li>
                            <li>Boys</li>
                        </ul>
                        </div>
                        </li>
                        <li><a href="#">Shop</a>
                        <div className='header-sub-nav'>
                        <ul>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Girls</li>
                            <li>Boys</li>
                        </ul>
                        </div>
                        </li>
                        <li><a href="#">Product</a>
                        <div className='header-sub-nav'>
                        <ul>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Girls</li>
                            <li>Boys</li>
                        </ul>
                        </div>
                        </li>
                        <li><a href="#">Pages</a>
                        <div className='header-sub-nav'>
                        <ul>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Girls</li>
                            <li>Boys</li>
                        </ul>
                        </div>
                        </li>
                        <li><a href="#">Blog</a>
                        <div className='header-sub-nav'>
                        <ul>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Girls</li>
                            <li>Boys</li>
                        </ul>
                        </div>
                        </li>
                        <li><a href="#">Buy Now</a>
                        <div className='header-sub-nav'>
                        <ul>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Girls</li>
                            <li>Boys</li>
                        </ul>
                        </div>
                        </li>
                    </ul>
                </nav>
                <div className='header-icons'>
                    <div className='header-icon'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='header-icon'>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className='header-icon'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className='header-icon'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header