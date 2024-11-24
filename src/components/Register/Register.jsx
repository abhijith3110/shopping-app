import React, { useState } from 'react'
import './Register.css'

const Resigter = () => {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className='register'>
      <div className='register-container'>
        <div className='register-header'>
          <img src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937" alt="" />
        </div>
        <div className='register-card'>
          <div className='register-card-heading'><h1>Sign Up</h1></div>
          <div className='register-card-form-input'>
            <form action="">
              <div className="register-form-input-img">
                <div className="register-form-label-img">
                  {file ? (
                    <img src={file} alt="Uploaded preview" />
                  ) : (
                    <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Placeholder" />
                  )}
                  <input type="file" id="file-input" onChange={handleChange} />
                  <label htmlFor="file-input">Choose Image</label>
                </div>
              </div>
              <div className='register-form-input'>
                <div className='register-form-label'>
                  <label htmlFor="">First Name</label>
                  <input type="text" name="" id="" />
                </div>
                <div className='register-form-label'>
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className='register-form-input'>
                <div className='register-form-label'>
                  <label htmlFor="">Email</label>
                  <input type="text" name="" id="" />
                </div>
                <div className='register-form-label'>
                  <label htmlFor="">Password</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className='register-form-input'>
                <div className='register-form-label'>
                  <label htmlFor="">Phone</label>
                  <input type="text" name="" id="" />
                </div>
                <div className='register-form-label'>
                  <label htmlFor="">Address</label>
                  <input type="text" name="" id="" />
                </div>
              </div>

            </form>
          </div>
          <div className='register-btn'>
            <button>Sign Up</button>
            <p>Already have Account ?<a href="/login"> Login</a></p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Resigter