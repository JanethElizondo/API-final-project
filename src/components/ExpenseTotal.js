import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)
    return (
        <div className="alert alert-info p-4">
            <span>Spent: ${totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal;