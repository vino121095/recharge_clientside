import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlanDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {}; // Retrieve the plan from state

  if (!plan) {
    return <p>No plan details available.</p>; // Handle no plan case
  }

  return (
    <div className="container">
  


      <div className="row justify-content-center text-align-center align-items-center vh-100">
        <div className="col-md-5">
        <i
            className="bi bi-arrow-left"
            style={{ cursor: 'pointer', marginRight: '30px', marginBottom: '10px', fontSize: '20px' }}
            onClick={() => navigate(-1)} // Back navigation
            aria-label="Go back"
          ></i>
          <h4 className="text-center mb-4">Payment</h4>
          <img 
                        src={`${process.env.PUBLIC_URL}/airtel.png`} 
                        alt="Payment Method" 
                        id='payicon'
                        style={{ display: 'block', margin: '0 auto' }} 
                    />
          <h2 className="text-center mt-4"><span>₹</span>{plan.new_price}</h2>

          <div className='card mt-5'>
                        <div className='card-body'>
                            <h5 className="">Plan</h5>
                            <p id='plantext'>Data: {plan.data} GB/Day</p>
                            <p id='plantext'>Calls: {plan.cells} Calls</p>
                            <p id='plantext' className='mb-2'>Validity: {plan.validity} Days</p>
                        </div>
                    </div>

          <div className='card mt-3'>
                        <div className='card-body'>
                            <h5 className="">Extra Benefits</h5>
                            <p id='plantext' className='mb-2'>{plan.extra_features}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block mt-4 mb-4 w-100">Pay Now</button>

        </div>
      </div>
    </div>
  );
};

export default PlanDetail;
