import React from 'react'
import { useNavigate } from 'react-router-dom'

const FailModal = () => {

  const navigate = useNavigate()

  return (
    <div className='payment-modal'>
    <div className='payment-modal-container'>
         <h1>Your Payment Failed !!!</h1>
        <button className="close-btn" onClick={()=> navigate('/')}>Back to Home</button>
    </div>
</div>
  )
}

export default FailModal