import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

export default class SignInAuth extends Component {
    constructor(props) {

        super(props)
        let loggedIn = false
        this.state = {
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e) {
        e.preventDefault()
        const { username, password, confirmPassword } = this.state
        if (username === "shubh@abc.com" && password === "shubh@1234" && confirmPassword === "shubh@1234") {
            this.setState({
                loggedIn: true,
            })
        } else if (username.length && password.length <= 3 && confirmPassword <= 3) {
            alert("Invalid Credentials")
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <div>
                <h1 style={{ height: "40px", marginLeft: "45%" }}>SignUp</h1>

                <form onSubmit={this.submitForm}>
                    <input style={{ height: "40px", marginLeft: "26%", width: "180px" }} type="text" placeholder="Enter name" name="name" value={this.state.name}
                        onChange={this.onChange} />
                    <input style={{ height: "40px", width: "180px" }} type="text" placeholder="Enter username" name="username" value={this.state.username}
                        onChange={this.onChange} />
                    <input style={{ height: "40px", width: "180px" }} type="password" placeholder="Enter password" name="password" value={this.state.password}
                        onChange={this.onChange} />
                    <input style={{ height: "40px", width: "180px" }} type="password" placeholder="Confirm password" name="confirmPassword" value={this.state.confirmPassword}
                        onChange={this.onChange} />
                    <br />
                    {/* <button style={{ height: "40px", marginLeft: "44%" }}>Sign In</button> */}
                    <button style={{ height: "60px", marginLeft: "44.5%", width: "140px", fontSize: "25px" }}>Sign Up</button>
                </form>
            </div>
        )
    }
}
