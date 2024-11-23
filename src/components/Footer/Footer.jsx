/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
          <div className="footer-nav-logo">
            <div className="footer-nav-logo-img">
              <img
                src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-ft-logo_300x.png?v=1632039782"
                alt=""
              />
            </div>
            <div className="footer-nav-logo-content">
              <p>
                Creative, flexible, Infinite Possibilities and High Performance
                shopify theme to make your business shine! Suitable for
                multipurpose stores.
              </p>
            </div>
          </div>
          <div  className="footer-nav-info">
            <p>Informations</p>
            <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Shipping & Delivery</a></li>
            </ul>
          </div>
          <div className="footer-nav-info">
          <p>Quick Shop</p>
            <ul>
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Kids Collection</a></li>
            </ul>
          </div>
          <div className="footer-nav-address">
          <p>Contact Us</p>
            <ul>
                <li><i className="fa-solid fa-location-dot" style={{color:"green"}}></i>55 Gallaxy Enque, 2568 steet, 23568 NY</li>
                <li><i className="fa-solid fa-phone" style={{color:"yellow"}}></i>Phone: (440) 000 000 0000</li>
                <li><i className="fa-regular fa-envelope" style={{color:"red"}}></i>Email: sales@yousite.com</li>
                <div className="social-icons">
                   <div>
                   <i className="fa-brands fa-facebook" style={{color:"blue"}}></i>
                   </div>
                   <div>
                   <i className="fa-brands fa-twitter" style={{color:"lightblue"}}></i>
                   </div>
                   <div>
                   <i className="fa-brands fa-whatsapp" style={{color:"lightgreen"}}></i>
                   </div>
                   <div>
                   <i className="fa-brands fa-instagram" style={{color:"#B73586"}}></i>
                   </div>
                   <div>
                   <i className="fa-brands fa-linkedin" style={{color:"darkblue"}}></i>
                   </div>
                </div>
            </ul>
          </div>
        </div>

        <div className="Newsletter">
          <div className="Newsletter-signup">
            <div className="Newsletter-signup-header">
                <p>Newsletter Sign Up</p>
            </div>
            <div className="Newsletter-signup-sub-header">
                <p>Enter your email to receive daily news and get 20% off coupon for all items.</p>
            </div>
            <div className="Newsletter-email-signup">
                <input type="text" placeholder="Email Address"/>
                <button>SUBCRIBE</button>
            </div>
          </div>

          <div className="Newsletter-copyright">
            <div className="Newsletter-copyright-header">
                <p>© 2024 Optimal Shopify Theme.</p>
            </div>
            <div className="Newsletter-copyright-header">
                <p>All Rights Reserved. Ecommerce Software by Shopify.</p>
                </div>

            <div className="Newsletter-copyright-tandc">
                <p>Privacy Policy  |  Terms & Conditions  |  Contact Us</p>
            </div>

            <div className="Newsletter-copyright-logos">
                <div className="Newsletter-copyright-logo">
                <i className="fa-brands fa-cc-visa" style={{color:"blue"}}></i>
                </div>
                <div className="Newsletter-copyright-logo">
                <i className="fa-brands fa-cc-mastercard" style={{color:"orange"}}></i>
                </div>
                <div className="Newsletter-copyright-logo">
                <i className="fa-brands fa-cc-amex" style={{color:"indigo"}}></i>
                </div>
                <div className="Newsletter-copyright-logo">
                <i className="fa-brands fa-paypal" style={{color:"blue"}}></i>
                </div>
                <div className="Newsletter-copyright-logo">
                <i className="fa-brands fa-cc-diners-club" style={{color:"magenta"}}></i>
                </div>
                <div className="Newsletter-copyright-logo">
                <i className="fa-brands fa-cc-discover" style={{color:"yellow"}}></i>
                </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
