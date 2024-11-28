/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
    }, [userData]);


    return (
        <header className={isFixed ? 'fixed' : ''}>
            <div className='header'>
                <div className='header-logo' onClick={() => navigate('/')}>
                    <img src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937" alt="header-logo" />
                </div>
                <nav className='header-nav'>
                    <ul className='header-nav-ul'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories">Shop</Link></li>
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

                    { Cookies.get('token') ?                     <div className='header-icons-nav'>
                    <ul>
                        <li>
                        <div className='header-icon header-user-img'>
                        {userData && userData.image ? (
                            <img src={`http://localhost:4000/uploads/${userData.image}`} alt="User" />

                        ) : (
                           <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="" />
                        )}
                    </div>

                    <div className='header-icon-nav'>
                                <ul>
                                    <li onClick={() => navigate('/user')}> <i class="fa-solid fa-user"></i> Profile</li>
                                    <li><i class="fa-solid fa-truck"></i> Orders</li>
                                    <li onClick={()=> navigate('/wishlist')}><i class="fa-solid fa-heart"></i> Wishlists</li>
                                    <li onClick={()=> navigate('/logout')}><i class="fa-solid fa-right-from-bracket"></i> Logout</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    </div> : ''}

                    <div className='header-icon header-icon-cart' onClick={() => Cookies.get('token') ? navigate('/cart') : navigate('/login')}>
                        <i className="fa-solid fa-cart-shopping"></i><p>{userData && Array.isArray(userData.cart) ? userData.cart.length : '0'}</p>
                    </div>

                    { Cookies.get('token') ? " " : <div className='header-login-btn' onClick={() => navigate('/login')}>
                        <button>Login</button>
                    </div> }

                </div>
            </div>
        </header>
    )
}

export default Header