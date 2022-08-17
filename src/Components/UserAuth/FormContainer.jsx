import React from 'react'
import Input from "./Input"
import Button from "./Button"
// import TextArea from "./TextArea"
import Mobile from "./Mobile"
import Login from "./Login"
import { FormProvider } from "./FormContextProvider"
import validator from "validator"



const btnStyle = {
    margin: '20px 20px 15px 15px',
    backgroundColor: "aqua"
}

const inpstyle = {
    marginLeft: "40px",
    backgroundColor: "whiteSmoke",
    marginBottom: "20px",
}



export class FormContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logIn: {
                name: '',
                city: '',
                email: '',
                password: '',
                confirmPassword: '',
                textarea: '',
                nextbtn: true,
                cityOptions: ["Delhi", "Bangalore", "Chennai", "Mumbai"],

            },
            userDetails: "",

        }
    }
    handleInp = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        console.log(`Input Name : ${name}  Value : ${value}`);
        this.setState(prevState => ({
            logIn:
            {
                ...prevState.logIn, [name]: value
            }
        })
            , () => console.log(this.state.logIn)
        )
    }


    handleSubmit = (e) => {


        if (
            this.state.user.name.length > 0 &&
            // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(
            //     this.state.user.password
            // ) &&
            validator.isEmail(this.state.user.email)
        ) {
            alert(`${this.state.user.name} You have successfully login`);
            this.setState(
                (prevState) => ({
                    ...prevState,
                    userDetails: prevState.user,
                }),
                () => console.log(this.state)
            );
        } else {
            alert("Please check properly your missing some credentials");
        }

    }



    render() {
        return (
            <>
                {this.state.logIn.nextbtn && (
                    <div>

                        <Input intype={"text"}
                            
                            
                            placeholder={"Enter your Name"}
                            isRequired={true}
                            style={inpstyle}
                            handleChange={this.handleInp} />


                        <Input intype={"text"}
                            name={"City"}
                            
                            placeholder={"Enter your City"}
                            isRequired={true}
                            style={inpstyle}
                            handleChange={this.handleInp} />

                        <Input intype={"email"}
                            name={"Email"}
                           
                            placeholder={"Enter your Email"}
                            isRequired={true}
                            style={inpstyle}
                            handleChange={this.handleInp} />

                        <Input intype={"password"}
                            name={"Password"}
                           
                            placeholder={"Enter your Password"}
                            isRequired={true}
                            style={inpstyle}
                            handleChange={this.handleInp} />

                        <Input intype={"password"}
                            name={"Confirm Password"}
                           
                            placeholder={"Confirm Password"}
                            isRequired={true}
                            style={inpstyle}
                            handleChange={this.handleInp} />

                        {/* <TextArea
                                title={"About your Life"}
                                rows={5}
                                name={"About"}
                                handleChange={this.handleInp}
                                placeholder={"Describe about your experiences"}
                                style={inpstyle}
                            /> */}

                        <Button
                            title={"Next"}
                            style={btnStyle}
                            action={this.handleSubmit}
                        />
                        <FormProvider value={this.state.userDetails} >
                            <Login data={this.props} />
                        </FormProvider>
                    </div>

                )


                }
                {!this.state.logIn.nextbtn && <Mobile />

                }
            </>
        )
    }
}





export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
};
export default FormContainer