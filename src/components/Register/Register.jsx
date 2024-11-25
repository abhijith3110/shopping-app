import React, { useState } from 'react'
import './Register.css'

const Resigter = () => {

  const [file, setFile] = useState();
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone:'',
    address:'',
    image: null
  })

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));
    setUserData({ ...userData, image: file });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
  };


  return (
    <div className='register'>
      <div className='register-container'>
        <div className='register-header'>
          <img src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937" alt="" />
        </div>
        <div className='register-card'>
          <div className='register-card-heading'><h1>Sign Up</h1></div>
          <div className='register-card-form-input'>
            <form onSubmit={handleSubmit}>
              <div className="register-form-input-img">
                <div className="register-form-label-img">
                  {file ? (
                    <img src={file} alt="img" />
                  ) : (
                    <img src="https://st2.depositphotos.com/5266903/7863/i/450/depositphotos_78639212-stock-photo-user-flat-black-and-white.jpg" alt="img" />
                  )}
                  <input type="file" id="file-input" onChange={handleChange} />
                  <label htmlFor="file-input">Choose Image</label>
                </div>
              </div>
              <div className='register-form-input'>
                <div className='register-form-label'>
                  <label htmlFor="">First Name</label>
                  <input type="text" value={userData.first_name} name='first_name' onChange={handleInputChange} />
                </div>
                <div className='register-form-label'>
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="last_name" value={userData.last_name} onChange={handleInputChange} />
                </div>
              </div>
              <div className='register-form-input'>
                <div className='register-form-label'>
                  <label htmlFor="">Email</label>
                  <input type="text" name="email" value={userData.email} onChange={handleInputChange}/>
                </div>
                <div className='register-form-label'>
                  <label htmlFor="">Password</label>
                  <input type="text" name="password" value={userData.password} onChange={handleInputChange} />
                </div>
              </div>
              <div className='register-form-input'>
                <div className='register-form-label'>
                  <label htmlFor="">Phone</label>
                  <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
                </div>
                <div className='register-form-label'>
                  <label htmlFor="">Address</label>
                  <input type="text" name="address" value={userData.address} onChange={handleInputChange} />
                </div>
              </div>

            </form>
          </div>
          <div className='register-btn'>
            <button type='submit'>Sign Up</button>
            <p>Already have Account ?<a href="/login"> Login</a></p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Resigter