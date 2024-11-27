import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import "./modal.css"

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState("Processing payment...");
    const [loading, setLoading] = useState(true);
    const [celebrate, setCelebrate] = useState(false); 
    const navigate = useNavigate()

    useEffect(() => {

        const sessionId = searchParams.get('session_id');
        const token = Cookies.get("token");

        if (sessionId) {

            fetch("http://localhost:4000/api/v1/order/verify-payment", {
                method: 'POST',  
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
              },

                body: JSON.stringify({ session_id: sessionId }), 
            })

                .then((response) => response.json())

                .then((data) => {

                    if (data.status === true) {

                        setMessage("Payment successful! Your order has been placed.");
                        setCelebrate(true); 
                    } else {

                        setMessage("Payment verification failed. Please Try Again.");
                    }
                })

                .catch((error) => {

                    setMessage("An error occurred while verifying payment.");
                })

                .finally(() => setLoading(false));

        } else {

            setMessage("No payment session found.");
            setLoading(false);
        }

    }, [searchParams]);

    return (

      <div className='payment-modal'>
      <div className='payment-modal-container'>
          {loading ? <p className="loading">Loading...</p> : <h1>{message}</h1>}
          <button className="close-btn" onClick={()=> navigate('/')}>Happy Shopping</button>
      </div>
          {celebrate && <Confetti />}
  </div>

    );
};

export default PaymentSuccess;
