import React from 'react'
import "./Login.css"

const Login = () => {

  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-header'>
          <img src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937" alt="" />
        </div>
        <div className='login-card'>
          <div className='login-card-img'>
            <img src="https://img.pikbest.com/wp/202346/e-commerce-website-swiss-a-3d-rendered-shopping-experience-for-social-media-and-promotion_9732850.jpg!bw700" alt="" />
          </div>
          <div className='login-card-form'>
            <div className='login-card-heading'><h1>Login</h1></div>
            <div className='login-card-form-input'>
              <form action="">
                <div className='login-form-input'>
                  <label htmlFor="">Email</label>
                  <input type="email" name="" id="" />
                </div>
                <div className='login-form-input'>
                  <label htmlFor="">Password</label>
                  <input type="Password" name="" id="" />
                </div>
              </form>
            </div>
            <div className='login-btn'>
              <button>Login</button>
              <p>Don't have a Account ? <a href="/register">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Login