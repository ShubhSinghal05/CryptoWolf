import React, { useState } from 'react'
import Input from "./Input"
import Button from "./Button"

const Mobile = () => {
    const [nextbt, setNextBtn] = useState(true)


    const handleInp = (e) => {
        let value = e.target.value;
        let name = e.target.name;


        console.log(`Input Name : ${name}  Value : ${value}`);

    }
    const handleSubmit = (e) => {
        // e.preventDefault()
        setNextBtn(false)
        // this.setState(prevState => ({
        //     logIn: { ...prevState.logIn, nextbtn: false }
        // }),
        //     () => console.log(this.state.logIn)
        // )

    }
    return (
        <div>
            <Input intype={"text"}
                name={"Mobile"}
                title={"Mobile"}
                placeholder={"Enter your Mobile"}
                isRequired={true}
                // style={inpstyle}
                handleChange={handleInp} />

            <Button
                title={"Next"}
                // style={btnStyle}
                action={handleSubmit}
            />
        </div>
    )
}

export default Mobile
