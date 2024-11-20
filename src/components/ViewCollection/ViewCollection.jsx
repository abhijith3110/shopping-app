import React from "react";
import "./ViewCollection.css";

const ViewCollection = ({ onClick, showAll }) => {
  return (
    <div className="view-collection">
      <button className="view-collection-btn" onClick={onClick}>
        {showAll ? "SHOW LESS" : "VIEW COLLECTION"}
      </button>
    </div>
  );
};

export default ViewCollection;
