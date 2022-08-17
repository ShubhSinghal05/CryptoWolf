import React from "react";
import { Redirect, Route } from "react-router-dom";
import { fakeAuth } from "./Login";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log('Component:', Component)

  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};
