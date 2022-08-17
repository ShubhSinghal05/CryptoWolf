import React, { useState } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import "../../Css/navbar.css";
import "../../Translation/i18n";
import "../../Css/Hometext.css";
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';
import NoMatch from '../NoMatch/NoMatch';
import AxiosCall from '../../Axios/AxiosCall';
import AxiosExchange from '../../Axios/AxiosExchange';
import SignUp from '../SignUp/SignUp';
import Cart from '../../Axios/Cart'
import Footer from '../Footer/Footer';
import Graph from "../../Axios/Graph";
import SignInAuth from "../SignUp/SignInAuth";
import { Icon } from '@iconify/react';
import {
    Home_MainPage,
    About_Page, Crypto_Page,
    Crypto_Exchange,
    Cart_Page,
    SignUp_Page,
    Login_Page
} from "../Constants/Constants";



const Navigation = () => {
    const [mode, setMode] = useState(true)
    const changebg = () => {
        setMode(!mode)
    }

    return (
        <div id={mode ? "dark" : "light"}>


            <div className="navbar">
                <img className="logo-img" src="https://i.im.ge/2022/07/06/utNZCL.png" alt='Logo img' />

                <NavLink className="link" to={Home_MainPage}>Home</NavLink>
                <NavLink className="link" to={About_Page}>About</NavLink>

                <NavLink className="link" to={Crypto_Page}>Crypto</NavLink>
                <NavLink className="link" to={Crypto_Exchange}>Exchange</NavLink>
                <NavLink className="link" to="/graph">Graph</NavLink>

                <NavLink className="link" to={SignUp_Page}>LogIn</NavLink>
                <NavLink className="link" to={Login_Page}>SignUp</NavLink>

                <NavLink className="link" to={Cart_Page}><Icon icon="akar-icons:cart" color="greenyellow" width="30" height="30" /></NavLink>

                <div className="form-check form-switch">
                    <input className="form-check-input"
                        style={{ backgroundColor: "greenyellow" }}
                        type="checkbox" role="switch" id="flexSwitchCheckChecked"
                        onChange={changebg} checked />

                </div>
            </div>



            <Switch>


                {/* <Route exact path="/home">
                    <Home />
                </Route> */}


                <Route exact path="/crypto">
                    <AxiosCall />
                </Route>


                <Route exact path="/Exchange">
                    <AxiosExchange />
                </Route>


                <Route exact path="/graph">
                    <Graph />
                </Route>


                <Route exact path="/about">
                    <Footer />
                </Route>


                 <Route exact path="/">
                    {/* <FormNavigationMenu /> */}
                    {/* <LogOutAuth/> */}
                    {/* <SignInAuth /> */}
                    <Home />
                </Route> 


                <Route exact path="/cart">
                    <Cart />
                </Route>

                {/* <Route exact path="/signup">
                </Route> */}

                <Route exact path="/signup" >
                    <SignUp />
                </Route>


                <Route exact path="/paymentPage">
                    <Pricing />
                </Route>


                <Route path="/*">
                    <NoMatch />
                </Route>


            </Switch>

        </div>
    )
}

export default Navigation
