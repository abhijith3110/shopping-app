import React, { useContext } from "react";
import { userContext } from "../../layout/Contexts/userContext";
import "./UserProfile.css";

const UserProfile = () => {
  const { userData } = useContext(userContext);

  return (
    <div className="user-profile">
      <div className="profile-container">
        <div className="profile-image">
          {userData && userData.image ? (
            <img
              src={`http://localhost:4000/uploads/${userData.image}`}
              alt={`${userData.first_name}'s profile`}
            />
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
          <h1>Your Orders</h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
