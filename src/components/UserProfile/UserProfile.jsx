import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userContext } from "../../layout/Contexts/userContext";
import "./UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(userContext);

  const handleLogout = () => {
    Cookies.remove("token");
    setUserData(null);
    navigate("/");
  };

  return (
    <div className="user-profile">
      <div className="profile-container">
        <div className="profile-section">
          <div className="profile-image">
            {userData && userData.image ? (
              <img
                src={`http://localhost:4000/uploads/${userData.image}`}
                alt={`${userData.first_name}'s profile`}
                style={{ width: "100px", height: "100px" }}
              />
            ) : (
              <div className="placeholder-image">No Image</div>
            )}
          </div>

          <div className="profile-details">
            <h1>
              {userData?.first_name} {userData?.last_name}
            </h1>
            <p>
              <strong>
                <i className="fa-solid fa-envelope" style={{ color: "red" }}></i>{" "}
              </strong>
              {userData?.email}
            </p>
            <p>
              <strong>
                <i className="fa-solid fa-phone" style={{ color: "green" }}></i>{" "}
              </strong>
              {userData?.phone}
            </p>
            <p>
              <strong>
                <i className="fa-solid fa-location-dot" style={{ color: "purple" }}></i>{" "}
              </strong>
              {userData?.address}
            </p>
          </div>

          <div className="logout-button">
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="order-section">
          <div className="user-order-list">

            <h2>Your Orders</h2>
            <ul>

              <li>Order 1</li>
              <li>Order 2</li>
              <li>Order 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
