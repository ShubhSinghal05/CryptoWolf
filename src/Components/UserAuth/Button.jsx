import React from 'react'

const Button = (props) => {
    return (

        <button
            style={{marginLeft:"42.5%",marginBottom:"13%", height:"40px"}}
            onClick={props.action}>
            {props.title}
        </button>



    )
}


export default Button