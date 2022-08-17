import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FormParent, { fakeAuth } from "./FormContainer";



export const FormNavigationMenu = () => {
    console.log('fakeAuth.isAuthenticated:', fakeAuth.isAuthenticated)
    return (
        <div>
            <nav>
                <Link to="/login">
                    {!fakeAuth.isAuthenticated ? 'Login' : 'Logout'}
                </Link>


            </nav>

            <Switch>
                <Route path="/login" component={FormParent} />

            </Switch>
        </div>
    );
};
