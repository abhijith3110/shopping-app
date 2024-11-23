import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewCollection.css";

const ViewCollection = () => {

  const navigate = useNavigate()

  return (
    <div className="view-collection">
      <button className="view-collection-btn" onClick={()=> navigate('/products')}>
        VIEW COLLECTION
      </button>
    </div>
  );
};

export default ViewCollection;
