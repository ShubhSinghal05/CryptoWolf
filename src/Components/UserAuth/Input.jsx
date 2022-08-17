import React from 'react'

const Input = (props) => {

    return (
        <div style={{marginLeft:"40%" , marginTop:"2%"}}>
            <label htmlFor={props.name} >{props.title}</label>
            <input style={{height:"30px", width:"270px", margin:"3px"}} id={props.name}
                name={props.name}
                // style={props.style}
                type={props.intype}
                required={props.isRequired}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                value={props.value}
            />


        </div>
    )
}


export default Input