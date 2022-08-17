import React, { useContext, useState } from 'react'
import "../Css/Coin.css"
import myContext from '../Components/Context/myContext';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Coin = (props) => {
    const { data } = props;
    const cart = useContext(myContext)
    const [total, setTotal] = useState(0)


    const buyNow = () => {

        cart.setCount([...cart.count, {
            current_price: props.data.current_price,
            symbol: props.data.symbol
        }])
        console.log("cart", cart)


    }


    return (
        <div>
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
            <div className="coin-container" >
                <div className="coin-row">
                    <div className="coin">
                        <p className="coin-symbol">{data.symbol}</p>
                        <img src={data.image} alt="crypto" />
                        <h1>{data.name}</h1>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">Price <br /> <br />₹ {data.current_price}</p>
                        <p className="coin-percent">High<br /><br /> ₹{data.high_24h}</p>
                        <p className="coin-percent">Low<br /> <br />₹{data.low_24h}</p>

                        {data.price_change_percentage_24h < 0 ? (

                            <p className="coin-percent red">Change <br /> <br />{data.price_change_percentage_24h.toFixed(2)}%</p>

                        ) :
                            (<p className="coin-percent green">Change <br /> <br /> {data.price_change_percentage_24h.toFixed(2)}%</p>)
                        }

                        <p className="coin-volume">Last Updated <br /> <br />{data.last_updated}</p>
                        <p className="coin-marketcap">Market Cap <br /><br />{data.market_cap}</p>
                        <p className="coin-volume">Price Change in 24h <br /><br /> ₹ {data.price_change_24h}</p>
                        <button onClick={() => cart.setCount([...cart.count,
                        {
                            current_price: props.data.current_price,
                            symbol: props.data.symbol,
                            image: props.data.image,
                            name: props.data.name,

                        }], toast(' Item added to cart!', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }))}>Buy Now</button>


                    </div>
                </div>





            </div>

        </div>
    )
}

export default Coin