import React, { useState, useContext } from 'react';
import DisplayBudget from './DisplayBudget';
import NewBudget from './NewBudget';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch} = useContext(AppContext)
    const [isRevising, setIsRevising] = useState(false);
    
    const handleEditClick = () => {
        setIsRevising(true);
    }

    const handleSaveClick =(value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
        setIsRevising(false);
    }
    return(
        <div className= 'alert alert-success p-8 d-flex align-items-center justify-content-between'>
            {isRevising ? (
                <NewBudget handleSaveClick ={handleSaveClick} budget= {budget}/>
            ) : (
                <DisplayBudget handleEditClick ={handleEditClick} budget={budget}/>

            )}
        
        </div>
    );
};

export default Budget; 
