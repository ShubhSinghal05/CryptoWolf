import React from 'react'

const TextArea = (props) => {
    return (
        <>
            <label>{props.title}</label>
            <textarea
                name={props.name}
                rows={props.rows}
                cols={props.cols}
                value={props.value}
                style={props.style}
                placeholder={props.placeholder}
                onChange={props.handleChange}

            />
        </>
    )
}


export default TextArea