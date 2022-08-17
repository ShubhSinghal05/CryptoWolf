import React from "react";
// import Redirect from "react-router-dom";
import { Redirect } from "react-router-dom";
import FormContext, { FormConsumer } from "./FormContextProvider";

class Login extends React.Component {
    static contextType = FormContext;
    constructor() {
        super();

        this.state = {
            redirectToReferrer: false,
        };
    }

    componentDidMount() {

    }
    login = () => {
        const userData = this.context;
        console.log("userData:", userData);
        if (userData) {
            fakeAuth.authenticate(() => {
                this.setState({ redirectToReferrer: true });
            });
        } else {
            fakeAuth.authenticate(() => {
                this.setState({ redirectToReferrer: false });
            });
        }
    };
    render() {
        console.log(this.props);

        const { from } = this.props.data.location.state || {
            from: { pathname: "/" },
        };
        console.log('from:', from)
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return <>

            <button style={{ height:"40px"}} onClick={this.login}>Log in</button>
        </>;
    }
}

/* A fake authentication function */

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
};

export default Login;
