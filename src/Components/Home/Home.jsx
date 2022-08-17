import React from 'react'
import "../../Css/Hometext.css"
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import download from "../../images/download.jpg"
import crp from "../../images/crp.jpg"
import crp2 from "../../images/crp2.jpg"
import crp1 from "../../images/crp1.webp"

// creating the function for logo and home text in home page.
const Home = () => {
    const images = [

        download,
        crp,
        crp1,
        crp2

    ];
    const imagesNew = [

        crp,
        crp1,
        download,

        crp2

    ];
    return (
        <>
            <div className="hometext">
                <h1 className="homeslogan">Its time to get the cheapest crypto!!!</h1>
                {/* <p className="homeslogannext">Leading Crypto Exchange</p> */}
                <img className="logoimg" src="https://i.im.ge/2022/07/06/utNZCL.png" alt='Logo img' style={{ width: "700px", height: "1400px" }} />
            </div>

            <div className="slide-main">
                <div className="slide-container">
                    <Zoom scale={0.1}>
                        {
                            images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                        }
                    </Zoom>
                </div>
                <div className="slide-container">
                    <Zoom scale={0.1}>
                        {
                            imagesNew.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                        }
                    </Zoom>
                </div>
                <div className="slide-container">
                    <Zoom scale={0.1}>
                        {
                            imagesNew.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                        }
                    </Zoom>
                </div>

            </div>







        </>
    )
}

// exporting home to NavigationRoute
export default Home