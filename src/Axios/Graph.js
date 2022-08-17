import React, { Component } from 'react'
import axios from 'axios';
// import "../Css/navbar.css"
import "../Css/Exchange.css"
import Chart from 'react-apexcharts'


export class AxiosExchange extends Component {
    constructor() {
        super();
        this.updateCharts = this.updateCharts.bind(this);

        this.state = {
            optionsMixedChart: {
                chart: {
                    id: "basic-bar",
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                stroke: {
                    width: [4, 0, 0]
                },
                xaxis: {
                    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                markers: {
                    size: 6,
                    strokeWidth: 3,
                    fillOpacity: 0,
                    strokeOpacity: 0,
                    hover: {
                        size: 8
                    }
                },
                yaxis: {
                    tickAmount: 5,
                    min: 0,
                    max: 100
                }
            },
            seriesMixedChart: [
                {
                    name: "series-1",
                    type: "column",
                    data: [17, 40, 25, 50, 49, 21, 70, 51]
                },
                {
                    name: "series-2",
                    type: "column",
                    data: [23, 12, 54, 61, 32, 56, 81, 19]
                },
                {
                    name: "series-3",
                    type: "column",
                    data: [62, 12, 45, 55, 76, 41, 23, 43]
                },{
                    name: "series-4",
                    type: "column",
                    data: [67, 18, 48, 50, 79, 46, 23, 40]
                }
            ],
            optionsRadial: {
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: "#fff",
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: "front",
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: "#fff",
                            strokeWidth: "67%",
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            showOn: "always",
                            name: {
                                offsetY: -20,
                                show: true,
                                color: "#888",
                                fontSize: "13px"
                            },
                            value: {
                                formatter: function (val) {
                                    return val;
                                },
                                color: "#111",
                                fontSize: "30px",
                                show: true
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "light",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#ABE5A1"],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Percent"]
            },
            seriesRadial: [76],
            optionsBar: {
                chart: {
                    stacked: true,
                    stackType: "100%",
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                dataLabels: {
                    dropShadow: {
                        enabled: true
                    }
                },
                stroke: {
                    width: 0
                },
                xaxis: {
                    categories: ["Crypto"],
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                fill: {
                    opacity: 1,
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        type: "vertical",
                        shadeIntensity: 0.35,
                        gradientToColors: undefined,
                        inverseColors: false,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [90, 0, 100]
                    }
                },

                legend: {
                    position: "bottom",
                    horizontalAlign: "right"
                }
            },
            seriesBar: [
                {
                    name: "bitcoin",
                    data: [32]
                },
                {
                    name: "ethereum",
                    data: [41]
                },
                {
                    name: "tether",
                    data: [12]
                },
                {
                    name: "dogecoin",
                    data: [65]
                }
            ]
        };
    }

    updateCharts() {
        const max = 90;
        const min = 30;
        const newMixedSeries = [];
        const newBarSeries = [];

        this.state.seriesMixedChart.forEach((s) => {
            const data = s.data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            });
            newMixedSeries.push({ data: data, type: s.type });
        });

        this.state.seriesBar.forEach((s) => {
            const data = s.data.map(() => {
                return Math.floor(Math.random() * (180 - min + 1)) + min;
            });
            newBarSeries.push({ data, name: s.name });
        });

        this.setState({
            seriesMixedChart: newMixedSeries,
            seriesBar: newBarSeries,
            seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
        });
        this.state = {
            users: [],
            errorMsg: ''
        }
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
                console.log('state', this.state.users);
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
                {/*
                    this.state.users.map((item, index) => {
                        { iterating the data defined  by item keyword  }
                        return <>
                            <div className="exchange-main_div">
                                <div className="exchange-div">
                                    <h1 className="exchange-id">  {item.id.toUpperCase()} &  CO.</h1>
                                    <img className="exchange-img" src={item.image} alt="Crypto Image" />

                                    <h2 className="exchange-h2"><span style={{ color: "#fff", marginLeft: "10px" }}>Link:-</span><a href={item.url} target="_blank"> {item.url}</a></h2>
                                    <h2 className="exchange-h2"><span style={{ color: "#fff", marginLeft: "10px" }}>Rank:-</span>{item.trust_score_rank}</h2>
                                    <h2 className="exchange-h2"><span style={{ color: "#fff", marginLeft: "10px" }}>Trade Volume:-</span> {item.trade_volume_24h_btc}</h2>
                                    <h2 className="exchange-h2"><span style={{ color: "#fff", marginLeft: "10px" }}>Trade Volume Normalized:-</span> {item.trade_volume_24h_btc_normalized}</h2>
                                </div>
                            </div>
                            
                        </>
                    })
               /* }
                {/* error msg will print if their will be some error */}
                {
                    this.state.errorMsg
                }
               
                <div className="app" style={{marginLeft:"33%"}}>
                    <div className="row">
                    <h1>Market Cap</h1>
                        <div className="col mixed-chart" style={{width:"500px"}}>
                            <Chart
                                options={this.state.optionsMixedChart}
                                series={this.state.seriesMixedChart}
                                type="line"
                                width="500"
                            />
                        </div>
                        <div style={{}} className="col percentage-chart">
                            <Chart
                                options={this.state.optionsBar}
                                height={140}
                                series={this.state.seriesBar}
                                type="bar"
                                width={500}
                            />
                        </div>
                        <div style={{marginTop: "-39%", marginLeft:"43%"}} className="col radial-chart">
                            <Chart
                                options={this.state.optionsRadial}
                                series={this.state.seriesRadial}
                                type="radialBar"
                                width="280"
                            />
                        </div>
                    </div>

                    <div className="row">
                        

                        <p className="col">
                            <button style={{marginTop:"24%", marginLeft:"20%" , width:"140px", height:"55px"}} onClick={this.updateCharts}>Update!</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
// exporting the default class component, so it get imported in the other files wherever it is required
export default AxiosExchange;

// code ends for exchange page and it is importing in NavigationRoute file for displaying in the app
// after click through navbar  
