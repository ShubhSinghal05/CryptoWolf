import React from 'react'
import "../../Css/Pricing.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pricing page after cart


const Pricing = () => {
    return (
        <>
            <div className="pricing-mainDiv">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <h1>Pay Here</h1>
                <input className="pricing-inp" type="text" placeholder="Enter Name on Card" />
                <input className="pricing-inp" type="number" placeholder="Enter Card Number" />
                <input className="pricing-inp" type="number" placeholder="Enter CVV" />
                <input className="pricing-inp" type="number" placeholder="Enter Expiry Date" />

                <button className="pricing-btn" onClick={() => toast(' Payment Made Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })}>Pay Now</button>
                <button className="pricing-btn" onClick={() => toast(' Enter your credit card details and click on Submit!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })}>Pay Later</button>
                <button className="pricing-btn" onClick={() => toast(' Amount will be deducted in next billing cycle!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })}>Submit</button>
            </div>

        </>)
}

export default Pricing
