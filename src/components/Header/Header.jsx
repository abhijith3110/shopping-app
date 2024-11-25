/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../layout/Contexts/userContext';
import Cookies from "js-cookie";
import "./Header.css"


const Header = () => {

    const { userData } = useContext(userContext);

    const [isFixed, setIsFixed] = useState(false);
    const navigate = useNavigate()

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

    const handleCategoryNavigation = (category) => {

        navigate(`/products?category=${category}#collection-category`);
    }

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    return (
        <header className={isFixed ? 'fixed' : ''}>
            <div className='header'>
                <div className='header-logo' onClick={() => navigate('/')}>
                    <img src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937" alt="header-logo" />
                </div>
                <nav className='header-nav'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/categories">Shop</a></li>
                        <li><a>Product</a>
                            <div className='header-sub-nav'>
                                <ul>
                                    <li onClick={() => handleCategoryNavigation("all")}>All</li>
                                    <li onClick={() => handleCategoryNavigation("mens")}>Mens</li>
                                    <li onClick={() => handleCategoryNavigation("womens")}>Womens</li>
                                    <li onClick={() => handleCategoryNavigation("kids")}>Kids</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className='header-icons'>
                    <div className='header-icon header-user-img' onClick={() => navigate('/user')}>
                        {userData && userData.image ? (
                            <img src={`http://localhost:4000/uploads/${userData.image}`} alt="User" />

                        ) : (
                            <i className="fa-solid fa-user"></i>
                        )}
                    </div>

                    <div className='header-icon header-icon-cart' onClick={() => Cookies.get('token') ? navigate('/cart') : navigate('/login')}>
                        <i className="fa-solid fa-cart-shopping"></i><p>{userData && Array.isArray(userData.cart) ? userData.cart.length : '0'}</p>
                    </div>

                    <div className='header-login-btn' onClick={() => navigate('/login')}>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header