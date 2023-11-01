import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = { 
            id: uuidv4(),
            name,
            date,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,

        })
        setName('')
        setCost('')
        setDate()
    }

    return ( 
        <form onSubmit = {onSubmit}>
            <div className = 'row'>
                <div className= 'col-sm'>
                    <label for= 'name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange= {(event) => setName(event.target.value)}

                        ></input>
                </div>
                <div className='col-sm col-lg-4'>
                    <label for="cost">Cost</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange= {(event) => setCost(event.target.value)}></input>
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor='date'>Due Date</label>
                    <input
                        type='date'
                        className='form-control'
                        id='date'
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    /></div>
                <div class= 'row mt-3'></div>
                    <div className='col-sm'>
                        <button type='submit'class='btn btn-success'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}
export default AddExpenseForm   