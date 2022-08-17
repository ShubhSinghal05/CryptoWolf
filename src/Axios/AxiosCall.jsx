// below commneted code is working fine and it is class based component


// import React, { Component } from 'react'
// import axios from 'axios';
// import "../Css/navbar.css"
// export class AxiosExample extends Component {
//     constructor() {
//         super();
//         this.state = {
//             users: [],
//             errorMsg: ''
//         }
//     }
//     componentDidMount() {
//         axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
//             .then((resp) => {
//                 const p = resp.data;
//                 console.log(JSON.stringify(p));
//                 this.setState({ users: resp.data });
//                 console.log('state', this.state.users);
//             }
//             ).catch((error) => {
//                 console.log(error);
//                 this.setState({ errorMsg: `error occured ${error.response.status}` });
//             });
//     }
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.users.map((item, index) => {
//                         return <>
//                             <h1>  {item.id}</h1>
//                             <img src={item.image} alt="Crpto Image" />
//                             <h3>{item.symbol}</h3>
//                             <h2><span style={{ color: "#002244" }}>Price:-</span> ₹  {item.current_price}</h2>
//                             <h2><span style={{ color: "#002244" }}>Rank:-</span> {item.market_cap_rank}</h2>
//                             <h2><span style={{ color: "#002244" }}>High:-</span>₹ {item.high_24h}</h2>
//                             <h2><span style={{ color: "#002244" }}>Low:-</span>₹ {item.low_24h}</h2>
//                             <h2><span style={{ color: "#002244" }}>Last Updated:-</span> {item.last_updated}</h2>
//                         </>
//                     })
//                 }
//                 {
//                     this.state.errorMsg
//                 }
//             </div>
//         )
//     }
// }

// export default AxiosExample;



//below code is in function based component

import React, { useState, useEffect } from 'react'
import axios from "axios"
import Coin from './Coin.js';
import "../Css/AxiosCall.css"
import { useContext } from "react";
import myContext from "../Components/Context/myContext"

// making axios call to fetching the data for all the crypto coins

const AxiosCall = () => {

    // using useState for storing the data and setting the value after api call.
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    //using useContext and mycontext is the global store for transfering the data

    const data = useContext(myContext)
    console.log("count", data.count)

    // using useEffect for api call and setCoins is storing the changed updated data after every new render
    // all new prices , updated images , last updated time and every data will be shown.

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data)
                // console.log(res.data)
            })
            .catch(error => console.log(error))
    }, []);

    // creating handleChange for search bar and added the debouncing

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    // created filteredCoins for filtering the data if a user search for a particular name or entering some minimum keywords(Debouncing)

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))

    // console.log("filter", filteredCoins)
    return (

        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a Currency</h1>
                <form>
                    <input type="text" placeholder='Search...' className="coin-input" onChange={handleChange} />
                </form>
            </div>
            {/* 
            maping the data and extracting it from filteredCoins, passing the props to the child 
            coinItem is the prop and it is passing on the Coin.js page
             */}
            {filteredCoins.map((coinItem) => {

                return <Coin data={coinItem} />

            })}
        </div>
    )
}
// exporting AxiosCall in NavigationRoute
export default AxiosCall


//code ends
