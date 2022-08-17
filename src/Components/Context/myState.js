import React from "react";
import MyContext from "./myContext";
import { useState } from "react";

// mainting the state and passing the props for data
const MyState = (props) => {

    // declaring the const and setting the data
    const [count, setCount] = useState([])


    return (

        //using provider and value as a props so it can provide data globally 

        <MyContext.Provider
            value={{
                count, setCount
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
};


// exporting MyState in app.js
export default MyState;