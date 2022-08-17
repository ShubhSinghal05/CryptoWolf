import React, { Component } from 'react'
import axios from 'axios';
import "../Css/Exchange.css"
import StarRatings from 'react-star-ratings';




export class AxiosExchange extends Component {

    constructor() {
        super();

        this.state = {
            users: [],
            errorMsg: ''
        }

    }
    changeRating(newRating) {
        this.setState({
            rating: newRating,


        });
    }
    // using users as state and errorMsg for showing the error


    // mounting the component and getting the data from axios api of all the crypto wallets and exchange
    // setting the state and stringifying the data to show browser 

    componentDidMount() {
        axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1`)
            .then((resp) => {
                const p = resp.data;
                console.log(JSON.stringify(p));
                this.setState({ users: resp.data });
                // console.log('state', this.state.users);
            }
            ).catch((error) => {
                console.log(error);
                this.setState({ errorMsg: `error occured ${error.response.status}` });
            });
    }

    // rendering starts
    render() {
        return (
            <div>
                {/*// mapping the data, all the data is in state.users that decalered on the top of the file*/}
                {
                    this.state.users.map((item, index) => {
                        {/* iterating the data defined  by item keyword */ }
                        return <>
                            <div className="exchange-main_div">


                                <div className="exchange-div">



                                    <h2 className="exchange-h2"
                                        style={{ fontSize: "45px" }}>
                                        <span
                                            style={{ color: "#fff", marginLeft: "-80%", fontSize: "45px" }}>
                                            #</span>
                                        {item.trust_score_rank}
                                    </h2>



                                    <img className="exchange-img"

                                        src={item.image} alt="Crypto Image" />



                                    <h1 className="exchange-id"
                                        style={{ borderRadius: "20px" }}>
                                        {item.id.toUpperCase()} &  CO.</h1>




                                    <h2 className="exchange-h2">
                                        <span style={{ color: "#fff", marginLeft: "10px", marginTop: "-30px" }}>
                                        </span>
                                        <button style={{
                                            height: "50px", width: "150px", fontSize: "25px",
                                            backgroundColor: "cyan", color: "black", borderRadius: "40px"
                                        }}>
                                            <a style={{ textDecoration: "none", color: "black" }}
                                                href={item.url} target="_blank">Visit</a>
                                        </button>
                                    </h2>



                                    <h2 className="exchange-h2">
                                        <span style={{ color: "#fff", marginLeft: "10px" }}>
                                            Trade Volume <br />
                                        </span> $
                                        {Math.ceil(item.trade_volume_24h_btc)}
                                    </h2>


                                    <h2 className="exchange-h2">
                                        <span style={{ color: "#fff", marginLeft: "10px", marginBottom: "10%" }}>
                                            Trade Volume Normalized
                                            <br />
                                        </span> $
                                        {Math.ceil(item.trade_volume_24h_btc_normalized)}
                                    </h2>




                                    <StarRatings
                                        rating={this.state.rating}
                                        starRatedColor="greenYellow"
                                        changeRating={this.changeRating}
                                        numberOfStars={5}
                                        onChange={() => alert("Thank You For Ratings")}
                                        name='rating'
                                    />
                                    {/* <br />
                                    <StarRatings
                                        rating={Math.ceil(Math.random() * 5)}
                                        starDimension="20px"
                                        starSpacing="5px"
                                        starRatedColor="greenYellow"
                                    /> */}
                                </div>

                            </div>
                        </>
                    })
                }
                {/* error msg will print if their will be some error */}
                {
                    this.state.errorMsg
                }
            </div>

        )
    }
}
// exporting the default class component, so it get imported in the other files wherever it is required
export default AxiosExchange;

// code ends for exchange page and it is importing in NavigationRoute file for displaying in the app
// after click through navbar  
