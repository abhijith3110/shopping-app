import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../layout/Contexts/userContext";
import "./UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const { userData } = useContext(userContext);

  return (
    <div className="user-profile">
      <div className="profile-container">
        <div className="profile-section">
          <div className="profile-image">
            {userData && userData.image ? (
              <img
                src={`http://localhost:4000/uploads/${userData.image}`}
                alt={`${userData.first_name}'s profile`}
              />
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                alt=""
              />
            )}
          </div>

          <div className="profile-details">
            <div className="profile-details-section">
              <h1>
                {userData?.first_name} {userData?.last_name}
              </h1>
            </div>

            <div className="profile-details-section">
              <i className="fa-solid fa-envelope" style={{ color: "red" }}></i>{" "}
              <p>{userData?.email} </p>
            </div>

            <div className="profile-details-section">
              <i className="fa-solid fa-phone" style={{ color: "green" }}></i>{" "}
              <p>{userData?.phone}</p>
            </div>

            <div className="profile-details-section">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "purple" }}
              ></i>{" "}
              <p>{userData?.address}</p>
            </div>
          </div>

          <div className="logout-button">
            <button onClick={()=> navigate('/logout')}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
