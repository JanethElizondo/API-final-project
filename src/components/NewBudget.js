import React, {useState} from 'react';

const NewBudget = (props) => {
    const [value, setValue] = useState(props.budget);
    return(
        <>
        <input 
            required= 'required'
            type= 'number'
            class= 'form-control mr-3'
            id='name'
            value= {value}
            onChange= {(event) =>setValue(event.target.value)}
            />
            <button
                type='button'
                class='btn btn-dark'
                onClick={()=>props.handleSaveClick(value)}>
                    Save
                </button>
        </>
    )
}

export default NewBudget;