import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userContext } from "../../layout/Contexts/userContext";
import "./UserProfile.css";

const UserProfile = () => {

  const navigate = useNavigate()
  const { userData, setUserData } = useContext(userContext);

  const handleLogout = () => {
    Cookies.remove("token"); 
    setUserData(null)
    navigate("/"); 
  };

  return (
    <div className="user-profile">
      <div className="profile-container">
        <div className="profile-image">
          {userData && userData.image ? (
            <img
              src={`http://localhost:4000/uploads/${userData.image}`}
              alt={`${userData.first_name}'s profile`}
            style={{width:"100px",height:"100px"}}/>
          ) : (
            <div className="placeholder-image">No Image</div>
          )}
        </div>

        <div className="profile-details">
          <h1>
            {userData?.first_name} {userData?.last_name}
          </h1>
          <p><strong><i class="fa-solid fa-envelope"></i>: </strong> {userData?.email}</p>
          <p><strong><i class="fa-solid fa-phone"></i> :</strong> {userData?.phone}</p>
          <p><strong><i class="fa-solid fa-location-dot"></i>: </strong> {userData?.address}</p>
        </div>
        <div>
        <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
