import React from 'react'

const DisplayBudget = (props) => {
    return(
        <>
            <span>Budget: ${props.budget}</span>
            <button type= 'button' class='btn btn-dark' onClick={props.handleEditClick}>Edit
            </button>
        </>
    )
}

export default DisplayBudget;