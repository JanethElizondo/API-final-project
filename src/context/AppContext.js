import { createContext, useReducer} from 'react';

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            }
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 3000,
    expenses: [
        { id: 12, name: 'Mortage/Rent', date: '10/1/2023', cost: 1000},
        { id: 13, name: 'Water/garbage', date:'10/20/2023', cost: 150}, 
        { id: 14, name: 'Electricity', date: '10/22/2023', cost: 300},
    ],
}

export const AppContext = createContext();

export const AppProvider =(props)=> {
    const[state, dispatch]= useReducer(AppReducer, initialState);

    return( <AppContext.Provider value= {{
    
        expenses: state.expenses,
        budget: state.budget,
        date: state.date,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
};
