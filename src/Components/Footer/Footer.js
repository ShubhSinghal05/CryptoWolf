import React from 'react'
import "../../Css/Hometext.css"

// creating the footer
const Footer = () => {
    return (
        <>

            {/* used bootstrap for footer with some changes in images */}

            <footer className="text-center text-white" style={{}}>

                <div className="container p-4" style={{}}>

                    <section className="">
                        <div className="row" style={{ display: "flex", gap: "85px", backgroundColor: "##1a1a1c", marginLeft: "30px" }}>

                            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light" style={{ display: "flex" }}
                                >
                                    <img style={{ height: "600px", width: "800px", borderRadius: "15px", marginTop: "5%" }}
                                        src="https://c4.wallpaperflare.com/wallpaper/266/651/807/technology-bitcoin-cryptocurrency-hd-wallpaper-preview.jpg"
                                        className="w-100"
                                    />

                                    <p style={{ fontSize: "30px", fontFamily: "cursive", marginTop: "7%", marginLeft: "7%", width: "700px", color: "#F0FFF0" }}><p className="homeslogannext">Leading Crypto Exchange</p> Cryptocurrencies are a new paradigm for money. Their promise is to streamline existing financial architecture to make it faster and cheaper. Their technology and architecture decentralize existing monetary systems and make it possible for transacting parties to exchange value and money independently of intermediary institutions such as banks.</p>
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "none" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


            </footer>
            <footer className="text-center text-white" style={{ marginTop: "5%", marginLeft: "8%" }}>

                <div className="container p-4" style={{}}>

                    <section className="">
                        <div className="row" style={{ display: "flex", gap: "85px", backgroundColor: "##1a1a1c", marginLeft: "30px" }}>
                            <div className="col-lg-2 col-md-12 mb-4 mb-md-0" >
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"

                                >
                                    <img style={{ height: "200px", width: "200px", borderRadius: "15px" }}
                                        src="https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728__340.jpg"
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "#1a1a1c" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img style={{ height: "200px", width: "200px", borderRadius: "15px" }}
                                        src="https://w0.peakpx.com/wallpaper/277/684/HD-wallpaper-ethereum-glitter-logo-cryptocurrency-grid-metal-background-ethereum-creative-cryptocurrency-signs-ethereum-logo.jpg"
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "#1a1a1c" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img style={{ height: "200px", width: "200px", borderRadius: "15px" }}
                                        src="https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&w=1000&q=80"
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "#1a1a1c" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img style={{ height: "200px", width: "200px", borderRadius: "15px" }}
                                        src="https://wallpaperaccess.com/full/4578729.jpg"
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "#1a1a1c" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img style={{ height: "200px", width: "200px", borderRadius: "15px" }}
                                        src="https://w0.peakpx.com/wallpaper/422/850/HD-wallpaper-doge-to-the-moon-dogecoin-currency-crypto-deviantart.jpg"
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "#1a1a1c" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>



                <div className="text-center p-3" style={{color:"white", marginLeft: "38%", marginTop: "2%" }}>
                    © 2022 Copyright:
                    <a className="text-white" href="" style={{color:"greenyellow"}}>  Crypto Wolf</a>
                </div>
            </footer>
        </>
    )
}

// exporting footer
export default Footer