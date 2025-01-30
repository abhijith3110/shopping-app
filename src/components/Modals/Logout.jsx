import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import userContext from '../../layout/Contexts/userContext';
import Cookies from "js-cookie";
import "./Logout.css"

const Logout = () => {

    const navigate = useNavigate()
    const { setUserData } = useContext(userContext);

    const handleLogout = () => {
      Cookies.remove("token");
      setUserData(null);
      navigate("/");
    };

    return (
        <div className='logout-modal'>
            <div className='logout-modal-container'>
                <h1>Are You Sure You Want to Logout ?</h1>
                <div className='logout-modal-btns'>
                <button className="close-btn" onClick={() => navigate('/')}>Cancel</button>
                <button className="logout-btn" onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout